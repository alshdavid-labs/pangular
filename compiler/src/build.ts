import { Writer } from './writer'
import { ParseResult } from './parser'
import { HTMLTags } from './element-names'
import { Container } from '@pangular/core'
import { compileAttributes } from './attributes'
import { replaceTemplates } from './matchers'

const writeResult = (w: Writer, r: ParseResult, c: Container) => {
  if (r.type === 'text') {
    w.write(`'${replaceTemplates(r.content!)}'`)
    return
  }
  
  const attributes = compileAttributes(r.attrs, c)
  if (r.name === 'Fragment' || r.name === 'pg-template') {
    w.write(`y(Fragment, {}, `)
  } else if (r.name === 'slot') {
    const tag = r.attrs.as ? `'${r.attrs.as}'` : 'Fragment'
    w.write(`y(${tag}, {}, children`)
  } else if (HTMLTags.includes(r.name!)) {
    w.write(`y('${r.name}', ${attributes}, `)
  } else {
    w.write(`y(d('${r.name}'), ${attributes}, `)
  }

  for (let child of r.children || []) {
    writeResult(w, child, c)
    w.write(", ")
  }

  w.write(')')
}

export const build = (
  results: ParseResult[], 
  container: Container
) => {
  const w = new Writer()
  let target: ParseResult
  if (results.length === 1) {
    target = results[0]
    target.attrs['#host'] = undefined
  } else {
    target = {
      type: 'tag',
      name: 'Fragment',
      voidElement: false,
      attrs: {},
      children: results
    }
  }
  writeResult(w, target, container)
  const compiled = w.get().replace(/\n/g, '')
  const output = `({ y, Fragment, ctx, d, children }) => ${compiled}`
  return output
}