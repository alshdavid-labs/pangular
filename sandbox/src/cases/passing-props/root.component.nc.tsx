import { Component, Input } from '@pangular/core'

@Component({
  selector: 'app-nested',
  template: ({ ctx, y }) => y('div', {}, [ ctx.value ])
})
export class NestedComponent {
  @Input()
  public value = 'nested-default' 
}

@Component({
  selector: 'app-root',
  declarations: [
    NestedComponent
  ],
  template: (props) => {
    console.log(props)
    const { ctx, d, y } = props
    return y('div', {}, [
      y(d('app-nested'), { value: ctx.value })
    ])
  } 
})
export class RootComponentNC {
  value = 'FromRoot'
}

