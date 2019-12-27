import { callback, Subscription, Emitter } from "./emitter"

// rxjs.Subject
export class EventEmitter<T> implements Emitter<T> {
  private subscribers: Record<string, callback<T>> = {}
  private resolveComplete: () => void
  private completePromise = new Promise(res => this.resolveComplete = res)
  private hasComplete = false

  toPromise() {
    return this.completePromise
  }

  subscribe(cb: callback<T>): Subscription {
    const key = (Math.random() * 1000000000000000).toFixed().toString()
    this.subscribers[key] = cb
    return {
      unsubscribe: () => delete this.subscribers[key]
    }
  }

  emit(value: T) {
    if (this.hasComplete) {
      throw new Error('Cannot next on complete subject')
    }
    for (const key of Object.keys(this.subscribers)) {
      this.subscribers[key](value)
    }
  }

  complete() {
    this.hasComplete = true
    this.resolveComplete()
  }
}

