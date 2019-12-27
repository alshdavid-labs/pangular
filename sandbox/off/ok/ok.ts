/** @jsx y */

import { y, Initializer, Component, Input } from './core'
import { render, h } from 'preact'

@Component({
  selector: 'mega',
  template: ({ ctx, y }) => <div>
    Hello, { ctx.myProp }
  </div>
})
class BComponent {
  @Input()
  myProp = ''
}


@Component({
  selector: 'name',
  declarations: [
    BComponent
  ],
  template: ({ ctx, y, d }) => <div>
    { y(d('mega'), { myProp: ctx.test }) }
    <div 
      _useViewContainer={false}>
      {ctx.test}
    </div>
    <input 
      value={ctx.test} 
      onInput={e => ctx._s('test', e.target.value)}/>
    <button onClick={$event => ctx.print($event)}>Ok</button>
  </div>
})
class MyComponent {
  test: string = 'ok'

  print() {
    console.log(this.test)
  }
}

Initializer
  .rootComponent(MyComponent)
  .attachTo(document.body)