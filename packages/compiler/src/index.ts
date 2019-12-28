import './prettier'

import { parse } from './parser'
import { build } from './build'
import { Container } from '@pangular/core'
export const compile = (
  html: string, 
  instance: Container
) => {
  const ast = parse(html)
  return build(ast, instance)
}

export function html(string: TemplateStringsArray) {
  function compiler(instance: Container) {
    const result = compile(string[0], instance)
    if ((window as any).process) {
      console.log((window as any).process(result))
    }
    return eval(result)
  }
  compiler.prototype.templateType = 'tagged-template'
  return compiler
}
