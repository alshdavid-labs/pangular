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
      <div *pgIf="shouldShow">Hi</div>
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

