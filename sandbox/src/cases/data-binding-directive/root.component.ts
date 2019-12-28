import { Component } from '@pangular/core'
import { html } from '@pangular/compiler'
import { BindModelDirective } from '@pangular/platform'

@Component({
  selector: 'app-root',
  declarations: [
    BindModelDirective
  ],
  template: html`<div>
    <div>{{ value || 'Something something default' }}</div>
    <input
      [(bindModel)]="value"/>
  </div>`
})
export class RootComponent {
  value = ''
}

