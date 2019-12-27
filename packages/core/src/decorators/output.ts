import { EventEmitter, Subscription } from '../event-emitter'
import { createPropertyDecorator } from './patches'

export function Output() {
  return createPropertyDecorator(({ key, onInit, onDestroy }) => {
    let subscription: Subscription

    onInit(({ ctx, getPropertyValue }) => {
      const value: EventEmitter<any> = getPropertyValue()
      
      subscription = value.subscribe(value => {
        ctx._container.emitOutput(key, value)
      })
    })

    onDestroy(() => {
      subscription.unsubscribe()
    })
    
  })
}
