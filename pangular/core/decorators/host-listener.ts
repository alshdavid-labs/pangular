import { getPrivateValue } from '../patch/private-value'

export function HostListener(event: string) {
  return function (target: any, key: string) {
    const originalAfterViewInit = target.afterViewInit || function () {}
    const originalOnDestroy = target.onDestroy || function () {}
    let callback: () => void
    let el: HTMLElement

    function afterViewInit(this: any) {
      el = getPrivateValue(this, 'ref')
      callback = this[key] || function () {}
      el.addEventListener(event, callback)
      originalAfterViewInit.apply(this)
    }

    function onDestroy(this: any) {
      el.removeEventListener(event, callback)
      originalOnDestroy.apply(this)
    }

    target.afterViewInit = afterViewInit
    target.onDestroy = onDestroy
  }
}

