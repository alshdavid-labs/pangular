import { callback, Subscription, Emitter } from "./emitter"
import { Subject } from './subject'

export class BehaviorSubject<T> implements Emitter<T> {
  private internal = new Subject<T>()
  
  constructor(
    private value: T
  ) {}

  getValue() {
    return this.value
  }

  subscribe(cb: callback<T>): Subscription {
    cb(this.value)
    return this.internal.subscribe(cb)
  }

  next(value: T) {
    this.value = value
    return this.internal.next(value)
  }

  complete() {
    return this.internal.complete()
  }
}

