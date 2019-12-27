import { Subscription } from "../event-emitter";
import { createPropertyDecorator } from './patches'

export function Input() {
  return createPropertyDecorator(({ key, onInit, onDestroy }) => {
    let subscription: Subscription

    onInit(({ ctx, setProperty, getPropertyValue }) => {
      subscription = ctx._viewContainer.$props.subscribe(
        (newValue) => {
          console.log('tried to get input', newValue)
          const currentValue = getPropertyValue()
          const update = newValue[key]
          if (currentValue === update) {
            return
          }
          console.log(update)
          setProperty(update)
        }
      )
    })

    onDestroy(() => {
      subscription.unsubscribe()
    })
  })
}
