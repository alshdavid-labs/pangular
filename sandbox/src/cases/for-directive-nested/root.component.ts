import { Component } from '@pangular/core'
import { ForDirective } from '@pangular/platform'
import { html } from '@pangular/compiler'

@Component({
  selector: 'app-root',
  declarations: [
    ForDirective
  ],
  template: html`<div>
    <div *pgFor="let value of items; let index">
      <div>Value: {{ value }}</div>
      <div>Index: {{ index }}</div>
      <div *pgFor="let value2 of items2">
        <strong>Value2 {{ value }}, {{ value2 }}</strong>
        <span *pgFor="let value of items">
          {{ value }}
        </span>
      </div>
      <hr>
    </div>
  </div>`
})
export class RootComponent {
  items = [1,2,3,4,5]
  items2 = ['a', 'b', 'c']
}

