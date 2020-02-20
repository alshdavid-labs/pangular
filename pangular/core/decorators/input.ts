import { getPrivateValue } from '../patch/private-value'

export function Input() {
  return function (target: any, key: string) {
    const originalOnInit = target.onInit || function () {}
    const originalOnUpdate = target.onUpdate || function () {}

    function onInit(this: any) {
      this[key] = getPrivateValue(this, 'props')[key]
      originalOnInit.apply(this)
    }

    function onUpdate(this: any) {
      this[key] = getPrivateValue(this, 'props')[key]
      originalOnUpdate.apply(this)
    }

    target.onInit = onInit
    target.onUpdate = onUpdate
  }
}