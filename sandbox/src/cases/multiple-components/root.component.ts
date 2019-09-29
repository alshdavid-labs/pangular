import { Component, Input } from '@pangular/core'
import { html } from '@pangular/compiler'

@Component({
  selector: 'app-nested',
  template: html`<div style="border: 1px solid #999">
    <div>Nested component</div>
    <div>From top level: {{ myProp }}</div>
  </div>`
})
export class NestedComponent {
  @Input()
  myProp = ''
}

@Component({
  selector: 'app-root',
  declarations: [
    NestedComponent
  ],
  template: html`<div>
    <div>Root Component</div>
    <app-nested myProp="Hey!" />
  </div>`
})
export class RootComponent {

}

