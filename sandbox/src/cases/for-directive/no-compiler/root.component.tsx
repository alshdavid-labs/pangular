import { Component, Structural } from '@pangular/core'
import { ForDirective } from '@pangular/platform'

// Step 1 - Initial template (html)
const Step1  = /*html*/`
  <div>
    <div pgFor="let value of values; let index">
      <div>Value: {{ value }}</div>
      <div>Index: {{ index }}</div>
    </div>
  </div>
`

@Component({
  selector: 'app-root',
  declarations: [
    ForDirective
  ],
  template: ({ ctx, d, y }) => (
    <div>
      <Structural 
        _directives={[d('pgFor')]}
        pgFor={ctx.items} 
        variables={{ 
          $implicit: 'value',
          index: 'index'
        }}>
        {ctx => (
          <div>
            <div>Value: {ctx.value}</div>
            <div>Index: {ctx.index}</div>
            <hr/>
          </div>
        )}
      </Structural>
    </div>
  )
})
export class RootComponent {
  items = ['a', 'b', 'c', 'd']

  add() {
    this.items.push(this.items.length.toString())
    this.items = [...this.items]
  }
}

