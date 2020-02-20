import { Writer } from './writer'
import { ParseResult } from './parser'
import { HTMLTags } from './element-names'
// import { Container } from '@pangular/core'
import { compileAttributes } from './attributes'
import { replaceTemplates } from './matchers'
import { preProcess } from './pre-process'
import { getStructuralDirectives, hasStructuralDirective } from './structural'

const getUnpackedAttributes = (t: string) => {
  const clean = (a: string[]) => a.map(i => i.trim())
  const splitLet = (exp: string) => clean(exp.split('let'))[1]
  const splitOf = (exp: string) => clean(exp.split('of'))

  const statements = clean(t.split(';'))
  const output = {}    
  let target: string = ''

  for (let statement of statements) {
      if (statement.includes('of')) {
          const [ s, it ] = splitOf(statement)
          target = it
          output['$implicit'] = splitLet(s)
          continue
      }
      const key = splitLet(statement)
      output[key] = key
  }

  return {
      output,
      target
  }
}

const unpackStructural = (r: ParseResult) => {
  for (const attr in r.attrs) {
    if (attr.includes('*')) {
      const value = r.attrs[attr]
      delete r.attrs[attr]
      const _children = r.children
      r.children = [
        {
          type: r.type,
          name: r.name,
          voidElement: r.voidElement,
          attrs: { ...r.attrs },
          children: _children
        }
      ]
      r.name = 'pg-structure'
      r.attrs = {}
      const propertyBinding = `[${attr.replace('*', '')}]`
      if (value.includes('let')) {
        const upa = getUnpackedAttributes(value)
        r.attrs[propertyBinding] = upa.target
        const vars = JSON.stringify(upa.output).replace(/"/g, "'")
        r.attrs['[_variables]'] = vars
      } else {
        r.attrs[propertyBinding] = value
      }
      // r.attrs['[_ctx]'] = null
      return
    }
  }
}


const writeResult = (w: Writer, r: ParseResult, c: any) => {
  if (r.type === 'text') {
    w.write(`'${replaceTemplates(r.content!)}'`)
    return
  }

  unpackStructural(r)
  
  const structuralDirectives = getStructuralDirectives(c)
  const attributes = compileAttributes(r.attrs, c)
  const structural = hasStructuralDirective(structuralDirectives, attributes)

  if (
    r.name === 'Fragment' || 
    r.name === 'pg-template') {
    w.write(`y(Fragment, ${attributes}, `)
  } else if (r.name === 'pg-structure') {
    w.write(`y(Structural, ${attributes}, `)
  } else if (r.name === 'slot') {
    const tag = r.attrs.as ? `'${r.attrs.as}'` : 'Fragment'
    w.write(`y(${tag}, {}, children`)
  } else if (HTMLTags.includes(r.name!)) {
    w.write(`y('${r.name}', ${attributes}, `)
  } else {
    w.write(`y(d('${r.name}'), ${attributes}, `)
  }

  if (structural) {
    w.write(`(ctx => [`)
    for (let child of r.children || []) {      
      writeResult(w, child, c)
      w.write(", ")
    }
    w.write(']))')
  } else {
    w.write('[')
    for (let child of r.children || []) {
      writeResult(w, child, c)
      w.write(", ")
    }
    w.write('])')
  }
}

export const build = (
  ast: ParseResult[], 
  container: any
) => {
  const w = new Writer()
  const target = preProcess(ast)
  writeResult(w, target, container)
  const compiled = w.get().replace(/\n/g, '')
  const output = `({ y, ctx, Fragment, Structural, d, m, children }) => ${compiled}`
  return output
}