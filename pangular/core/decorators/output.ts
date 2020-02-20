import { EventEmitter, Subscription } from '../event-emitter'
import { getPrivateValue } from '../patch/private-value'

export function Output() {
  return function (target: any, key: string) {
    const originalOnInit = target.onInit || function () {}
    const originalOnDestroy = target.onDestroy || function () {}
    let sub: Subscription

    function onInit(this: any) {
      const target = getPrivateValue(this, 'props')[key]

      console.log({
        target, 
        key,
        props: getPrivateValue(this, 'props')
      })

      if (target) {
        (this[key] as EventEmitter<any>).subscribe(value => target(value))
      }

      originalOnInit.apply(this)
    }

    function onDestroy(this: any) {
      sub.unsubscribe()
      originalOnDestroy.apply(this)
    }

    target.onInit = onInit
    target.onDestroy = onDestroy
  }
}