import { Component } from '@pangular/core'
import { ForDirective } from '@pangular/platform'
import { html } from '@pangular/compiler'

@Component({
  selector: 'app-root',
  declarations: [
    ForDirective
  ],
  template: html`<div>
    <div *pgFor="let value of values; let index">
      <div>Value: {{ value }}</div>
      <div>Index: {{ index }}</div>
      <hr>
    </div>
  </div>`
})
export class RootComponent {
  items = [1,2,3,4,5]

  add() {
    this.items.push(this.items.length)
    this.items = [...this.items]
  }
}

