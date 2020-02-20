import { getPrivateValue } from '../patch/private-value'

export function HostElement() {
  return function (target: any, key: string) {
    const originalAfterViewInit = target.afterViewInit || function () {}

    function afterViewInit(this: any) {
      this[key] = getPrivateValue(this, 'ref')
      originalAfterViewInit.apply(this)
    }

    target.afterViewInit = afterViewInit
  }
}