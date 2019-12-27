import { Component } from '@pangular/core'
import { html } from '@pangular/compiler'

@Component({
  selector: 'app-root',
  template: html`
    <div>
      <div *pgIf="shouldShow">
        Hi!
      </div>
    </div>`
})
export class RootComponent {
  shouldShow = false
}

