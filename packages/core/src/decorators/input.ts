import { Subscription } from "../event-emitter";
import { createPropertyDecorator } from './patches'

export function Variables() {
  return Input('_variables')
}

export function Input(value?: string) {
  return createPropertyDecorator(({ key, onInit, onDestroy }) => {
    let subscription: Subscription

    onInit(({ ctx, setProperty, getPropertyValue }) => {
      subscription = ctx._container.$props.subscribe(
        (newValue) => {
          const currentValue = getPropertyValue()
          const update = newValue[value || key]
          if (currentValue === update) {
            return
          }
          setProperty(update)
        }
      )
    })

    onDestroy(() => {
      subscription.unsubscribe()
    })
  })
}
