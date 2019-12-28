import { Component } from '@pangular/core'
import { IfDirective } from '@pangular/platform'
import { html } from '@pangular/compiler'

@Component({
  selector: 'app-root',
  declarations: [
    IfDirective
  ],
  template: html`
    <div>
      <pg-structure [pgIf]="shouldShow">
        <div>Hi</div>
      </pg-structure>
    </div>
  `
})
export class RootComponent {
  shouldShow = true

  toggle() {
    console.log('toggled')
    this.shouldShow = !this.shouldShow
  }
}

