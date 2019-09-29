import { Component } from '@pangular/core'
import { html } from '@pangular/compiler'

@Component({
  selector: 'app-root',
  template: html`<div>
    <div>{{ getTitle() }}</div>
    <button
      (onClick)="onClick()">
      Click Me!
    </button>
  </div>`
})
export class RootComponent {
  hasBeenClicked = false

  getTitle(): string {
    if (this.hasBeenClicked) {
      return 'You have clicked'
    }
    return 'Have not clicked yet'
  }

  onClick() {
    this.hasBeenClicked = true
  }
}


/*
  property accesors do not work inside templates yet
*/

