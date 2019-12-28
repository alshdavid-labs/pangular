import { Directive, Input, Children, Child, TemplateFn } from '@pangular/core'

type ForDirectiveVariables = {
  $implicit: string,
  index?: string,
}

@Directive({
  attribute: 'pgFor'
})
export class ForDirective {
  @Input()
  public pgFor: any[] = []

  @Input()
  public variables: ForDirectiveVariables

  @Children()
  private template: TemplateFn
  
  render() {
    const itemKey = this.variables.$implicit
    const indexKey = this.variables.index
    const items: Child[] = []

    for (const i in this.pgFor) {
      const item = this.pgFor[i]
      const output = { [itemKey]: item } 
      if (indexKey) {
        output[indexKey] = i
      }
      items.push(this.template(output))
    }

    return items
  }
}