import { Subscription } from "../event-emitter";
import { createPropertyDecorator } from './patches'

export function Input() {
  return createPropertyDecorator(({ key, onInit, onDestroy }) => {
    let subscription: Subscription

    onInit(({ ctx, setProperty, getPropertyValue }) => {
      console.log(ctx)
    })

    onDestroy(() => {
      subscription.unsubscribe()
    })
  })
}
