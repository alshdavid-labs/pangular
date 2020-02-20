import { parse } from './parser'
import { build } from './build'

export const compile = (
  html: string, 
  instance: any
) => {
  const ast = parse(html)
  return build(ast, instance)
}

export function html(string: TemplateStringsArray) {
  function compiler(instance: any) {
    const result = compile(string[0], instance)
    return eval(result)
  }
  compiler.prototype.templateType = 'tagged-template'
  return compiler
}
