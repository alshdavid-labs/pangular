import { Component, Input, Output, EventEmitter } from '@pangular/core'
import { html } from '@pangular/compiler'

@Component<A>({
  selector: 'app-a',
  template: html`
    <div>{{test}}
    <button (onClick)="doThing()">Hey</button>
    </div>
  `
})
export class A {
  @Input()
  test = 'suuv'

  @Output()
  onThing = new EventEmitter()

  doThing() {
    this.onThing.emit('test value')
  }
}
