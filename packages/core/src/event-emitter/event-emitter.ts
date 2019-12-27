import { callback, Subscription, Emitter } from "./emitter"

// rxjs.Subject
export class EventEmitter<T> implements Emitter<T> {
  private subscribers: Record<symbol, callback<T>> = {}
  private hasComplete = false

  subscribe(cb: callback<T>): Subscription {
    const key = Symbol()
    this.subscribers[key] = cb
    return {
      unsubscribe: () => delete this.subscribers[key]
    }
  }

  emit(value: T) {
    if (this.hasComplete) {
      throw new Error('Cannot next on complete subject')
    }
    for (const key in this.subscribers) {
      this.subscribers[key](value)
    }
  }

  complete() {
    this.hasComplete = true
  }
}

