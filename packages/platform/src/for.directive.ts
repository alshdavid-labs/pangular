import { Directive, Input, Variables, Children, Child, TemplateFn } from '@pangular/core'

type ForDirectiveVariables = {
  $implicit: string,
  index?: string,
}

@Directive({
  attribute: 'pgFor',
  structural: true,
})
export class ForDirective {
  @Input()
  public pgFor: any[]

  @Variables()
  public variables: ForDirectiveVariables

  @Children()
  private template: TemplateFn
  
  render() {
    if (!this.pgFor) {
      throw new Error('[ForDirective] Array not supplied')
    }
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