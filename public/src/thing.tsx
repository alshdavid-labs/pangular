import { Component, HostElement, HostListener } from '@pangular/core'
import { html } from '@pangular/compiler'
import { A } from './a'

// html`<div>
// <app-a (onThing)="lol($event)" [test]="value" />
// </div>
// `

class Test {
  @HostListener('input')
  onInput(event) {
    console.log(event)
  }

  @HostElement()
  hostElement: HTMLElement

  afterViewInit() {
    console.log(this.hostElement)
  }
}

const test: any = new Test()
test.prototype = {}
test.prototype._private = {
  type: 'directive'
}

@Component({
  selector: 'app-component',
  declarations: [A],
  template: ({y, ctx, Fragment, Structural, d, m, children}: any)=>y(Fragment, {}, [y('div', {}, ['' + ctx.value + '', ]), y('input', {
    '__directives': [test],
    'onInput': $event=>ctx.value = $event.target.value,
    'value': ctx.value
}, []), ])
})
export class Thing {
  value = 'hey'

  changeValue() {
    this.value = prompt('ok')
  }
}


// @Component<Thing>({
//   template: ({ state, h }) => <div>
//     <Render component={A} />
//     <div>
//       {state.items.map(item => <div>{item}</div>)}
//     </div>
//     <button onClick={() => state.update()}></button>
//   </div>
// })
// export class Thing {
//   items = ['one']

//   update() {
//     const v = prompt('Add item')
//     this.items.push(v)
//   }
// }
