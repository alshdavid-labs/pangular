import { createPropertyDecorator } from './patches'

export type Child = any

export type TemplateFn = (context?: Record<string, any>) => Child

export function Template() {
  return createPropertyDecorator(({ key, onInit, onDestroy }) => {
    onInit(({ ctx, setProperty }) => {
      const templateFn = (args = {}) => ctx._container.children[0](args)
      setProperty(templateFn)
    })
  })
}

export function Children() {
  return createPropertyDecorator(({ key, onInit, onDestroy }) => {
    onInit(({ ctx, setProperty }) => {
      setProperty(ctx._container.children)
    })
  })
}

export function Child() {
  return createPropertyDecorator(({ key, onInit, onDestroy }) => {
    onInit(({ ctx, setProperty }) => {
      if (
        ctx._container.children || 
        !ctx._container.children.length
      ) {
        return
      }
      setProperty(ctx._container.children[0])
    })
  })
}
