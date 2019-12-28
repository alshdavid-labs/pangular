import { Component, Structural } from '@pangular/core'
import { IfDirective } from '@pangular/platform'

@Component({
  selector: 'app-root',
  declarations: [
    IfDirective
  ],
  template: ({ ctx, d, y }) => <div>
    <Structural
      _directives={[d('pgIf')]}
      pgIf={ctx.shouldShow}>
      {ctx => <div>Hi</div>}
    </Structural>
    <button 
      onClick={() => ctx.toggle()}>
      Toggle
    </button>
  </div>
})
export class RootComponent {
  shouldShow = true

  toggle() {
    console.log('toggled')
    this.shouldShow = !this.shouldShow
  }
}

