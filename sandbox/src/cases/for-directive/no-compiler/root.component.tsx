import { Component, Structural } from '@pangular/core'
import { ForDirective } from '@pangular/platform'

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
        _variables={{ 
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

