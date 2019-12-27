export type callback<T = any> = (value: T) => void

export interface Subscription {
  unsubscribe: () => void
}

export interface Emitter<T> {
  subscribe(cb: (value: T) => void): Subscription
}