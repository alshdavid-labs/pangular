import { Component } from '@pangular/core'
import { html } from '@pangular/compiler'
import { NestedComponent } from './nested.component'

@Component({
  selector: 'app-root',
  declarations: [
    NestedComponent
  ],
  template: html`<div>
    <app-nested />
    <input
      [value]="value"
      (onInput)="value = $event.target.value"/>
  </div>`
})
export class RootComponent {
  value = ''

  setValue(e: any) {
    this.value = e.target.value
  }
}

