import { isStructuralDirective ,hasPropertyAndEventBinding, startsWithHash, hasHandlebars, hasEventBinding, hasPropertyBinding } from './matchers'
import { Container } from '@pangular/core'

export function compileAttributes(OGAttrs: Record<string, string>, c: Container) {
  const attrs = {...OGAttrs}
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
  const declarations = c.declarations
  let directives: string[] = []
  for (const [ attr, value ] of Object.entries(attrs)) {
    if (startsWithHash(attr)) {
      // TODO
      // const k = attr.slice(1, attr.length)
      // buff.push(`ref: obtainRef('${k}')`)
      continue
    } 
    if (isStructuralDirective(attr)) {
      console.log('is structural')
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
      buff.push(`'${k}' : ctx.${value}`);
      continue
    }
    buff.push(`'${attr}' : '${value}'`);
  }
  const directivesStr = `_directives: [ ${directives.join(', ')} ]`

  return '{ ' + directivesStr + ', ' + buff.join(', ') + ' }'
}