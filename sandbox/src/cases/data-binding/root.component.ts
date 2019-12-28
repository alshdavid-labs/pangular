import { Component } from '@pangular/core'
import { html } from '@pangular/compiler'

@Component({
  selector: 'app-root',
  template: html`<div>
    <div>{{ value || 'Something something default' }}</div>
    <input
      [value]="value"
      (onInput)="value = $event.target.value"/>
  </div>`
})
export class RootComponent {
  value = ''
}

