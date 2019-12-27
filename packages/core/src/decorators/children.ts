import { Subscription } from "rxjs";
import { createPropertyDecorator } from './patches'

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
