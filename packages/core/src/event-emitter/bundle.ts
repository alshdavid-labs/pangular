import { Subscription } from './emitter'

export class Bundle {
  subscriptions: Subscription[] = []

  add(subscription: Subscription): void {
    this.subscriptions.push(subscription)
  }

  unsubscribe(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe())
    this.subscriptions = []
  }
}
