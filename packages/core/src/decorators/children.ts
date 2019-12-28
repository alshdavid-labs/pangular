import { createPropertyDecorator } from './patches'

export type Child = any

export type TemplateFn<T = Record<string, any>> = (args?: T) => Child

export function Children() {
  return createPropertyDecorator(({ key, onInit, onDestroy }) => {
    onInit(({ ctx, setProperty }) => {
      if (
        Array.isArray(ctx._container.children) && 
        ctx._container.children.length === 1) {
        const templateFn = (args = {}) => ctx._container.children[0](args)
        setProperty(templateFn)
        return
      }
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
