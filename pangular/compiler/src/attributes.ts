import { isStructuralDirective, hasPropertyAndEventBinding, startsWithHash, 
  hasHandlebars, hasEventBinding, hasPropertyBinding } from './matchers'
// import { Container } from '@pangular/core'

export function compileAttributes(_attrs: Record<string, string>, c: any) {
  const attrs = {..._attrs}
  if (Object.keys(attrs).length === 0) {
    return '{}'
  }
  
  for (const key in attrs) {
    if (hasPropertyAndEventBinding(key)) {
      const k = key.slice(2, -2)
      attrs[`[${k}]`] = attrs[key]
      attrs[`(${k}Change)`] = `${attrs[key]} = $event`
      delete attrs[key]
    }
  }
  const buff: string[] = [];
  const declarations = c.declarations || {}
  let directives: string[] = []
  for (const [ attr, value ] of Object.entries(attrs)) {
    if (startsWithHash(attr)) {
      // TODO
      // const k = attr.slice(1, attr.length)
      // buff.push(`ref: obtainRef('${k}')`)
      continue
    } 
    if (hasHandlebars(attr)) {
      const k = attr.slice(1, -1)
      buff.push(`'${k}' : ctx.${value}`);
      continue
    }  
    if (hasEventBinding(attr)) {
      const k = attr.slice(1, -1)
      buff.push(`'${k}' : $event => ctx.${value}`);
      continue
    } 
    if (hasPropertyBinding(attr)) {
      const k = attr.slice(1, -1)
      if (Object.keys(declarations).includes(k)) {
        directives.push(`d('${k}'),`)
      }
      // if (k === '_ctx') {
      //   buff.push(`'${k}' : ctx`);
      //   continue
      // }
      if (k === '_variables') {
        buff.push(`'${k}' : ${value}`);
        continue
      }
      buff.push(`'${k}' : ctx.${value}`);
      continue
    }
    buff.push(`'${attr}' : '${value}'`);
  }
  let directivesStr = ''
  if (directives.length !== 0) {
    directivesStr = `_directives: [ ${directives.join(', ')} ],`
  }
  
  return '{ ' + directivesStr + buff.join(', ') + ' }'
}