import { createPropertyDecorator } from './patches'

export function ContainerRef() {
  return createPropertyDecorator(({ key, onInit, onDestroy }) => {
    onInit(({ ctx, setProperty }) => {
      setProperty(ctx._container)
    })
  })
}
