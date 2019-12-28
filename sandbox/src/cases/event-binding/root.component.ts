import { Component } from '@pangular/core'
import { html } from '@pangular/compiler'

@Component({
  selector: 'app-root',
  template: html`<div>
    <div>{{ title }}</div>
    <div>{{ getTitle() }}</div>
    <div>{{ hasBeenClicked ? 'OK' : 'Not OK' }}</div>
    <button
      (onClick)="onClick()">
      Click Me
    </button>
  </div>`
})
export class RootComponent {
  hasBeenClicked = false

  get title() {
    if (this.hasBeenClicked) {
      return 'You have clicked'
    }
    return 'Have not clicked yet'
  }

  getTitle(): string {
    if (this.hasBeenClicked) {
      return 'You have clicked'
    }
    return 'Have not clicked yet'
  }

  onClick() {
    this.hasBeenClicked = !this.hasBeenClicked
  }
}
