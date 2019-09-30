import { html } from '@pangular/compiler'
import { y, Component, Directive, Children, ContainerRef, Input } from '@pangular/core'
import { Fragment, h } from 'preact'

@Component({
  selector: 'app-root',
  declarations: [ IfDirective ],
  template: ({ ctx, tctx, d }) => {
    // console.log(d('pgIf'))
    return y('div', {}, [
      y('div', {}, [ 'Ok' ]),
      y(Fragment, { pgIf: ctx.value, _tctx: tctx, _directives: [ d('pgIf') ] }, 
        tctx =>  y('div', {}, [ 'Hi' ])
      )
    ])
  }
})
export class RootComponent {
  value = true
}
