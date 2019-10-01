import { BehaviorSubject } from 'rxjs'

export class ObjectProxy<T = Record<string, any>> {
  public defaultIgnored = ['constructor', 'length', 'prototype']
  public $value: BehaviorSubject<T>

  get value(): T {
    return this.$value.getValue() as T
  }

  constructor(
    initialValue: T = {} as T
  ) {
    this.$value = new BehaviorSubject<T>(initialValue as T)
  }

  public setProperty(key: string, value: any) {
    const update = {
      ...this.value,
      [key]: value
    }
    const isSame = this.shallowEqual(update)
    if (isSame) {
      return
    }
    this.$value.next(update)
  }

  public defineProperty(target: any, key: any) {
    Object.defineProperty(target, key, {
      get: () => this.value[key],
      set: newValue => {
        const update = { 
          ...this.value,
          [key]: newValue
        }
        const isSame = this.shallowEqual(update)
        if (isSame) {
          return
        }
        this.$value.next(update)
      }
    })
  }

  public dispenceProxy(): T {
    const keys = Object.getOwnPropertyNames(this.value)
    const proxy = {}
    for (let key of keys) {
      this.defineProperty(proxy, key)
    }
    return proxy as T
  }

  shallowEqual(compare: Record<string, any>) {
    const OGkeys = Object.getOwnPropertyNames(this.value)
    const keys = Object.getOwnPropertyNames(compare)
    if (keys.length !== OGkeys.length) {
      return false
    }
    for (let key of keys) {
      if (!OGkeys.includes(key)) {
        return false
      }
      if (this.value[key] !== compare[key]) {
        return false
      }
    }
    return true
  }
}

export function getClassKeys(instance: any, exclude: string[] = []): string[] {
  const defaultIgnored = ['constructor', 'length', 'prototype']
  const items = [
    ...Object.getOwnPropertyNames(instance.constructor.prototype),
    ...Object.getOwnPropertyNames(instance),
  ]
  return items
    .filter(item => !defaultIgnored.includes(item))
    .filter(item => !exclude.includes(item))
}

export function patchObject(objectProxy: ObjectProxy, target: any) {
  const proxy = objectProxy.dispenceProxy()
  const keys = Object.keys(objectProxy.value)
  for (const key of keys) {
    const targetValue = Object.getOwnPropertyDescriptor(target, key)
    if (targetValue && targetValue.get) {
      continue
    }
    const value = Object.getOwnPropertyDescriptor(proxy, key)
    Object.defineProperty(target, key, value)
  }
}

export function useObjectAsSource(objectProxy: ObjectProxy, target: any) {
  const keys = getClassKeys(target)
  for (const key of keys) {
    objectProxy.setProperty(key, target[key])
  }
}

interface ProxyContext {
  _s(key: string, value: any): void
}
export function createContext<T = Record<string, any>>(objectProxy: ObjectProxy): ProxyContext & T {
  const ctx = {
    _s(key: string, value: any) {
      objectProxy.setProperty(key, value)
    }
  }
  patchObject(objectProxy, ctx)
  return ctx as any
}