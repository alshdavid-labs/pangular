import { parse } from './parser'
import { build } from './build'
import { ViewContainer } from '@pangular/core'

export const compile = (
  html: string, 
  instance: ViewContainer
) => {
  const ast = parse(html)
  return build(ast, instance)
}

export function html(string: TemplateStringsArray) {
  function compiler(instance: ViewContainer) {
    const result = compile(string[0], instance)
    return eval(result)
  }
  compiler.prototype.templateType = 'tagged-template'
  return compiler
}
