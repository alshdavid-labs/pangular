import { callback, Subscription, Emitter } from "./emitter"
import { EventEmitter } from './event-emitter'

// rxjs.BehaviorSubject
export class StatefulEventEmitter<T> implements Emitter<T> {
  private internal = new EventEmitter<T>()
  
  constructor(
    private value: T
  ) {}

  getValue() {
    return this.value
  }

  toPromise() {
    return this.internal.toPromise()
  }

  subscribe(cb: callback<T>): Subscription {
    cb(this.value)
    return this.internal.subscribe(cb)
  }

  emit(value: T) {
    this.value = value
    return this.internal.emit(value)
  }

  complete() {
    return this.internal.complete()
  }
}

