import { Directive, Input, Children, TemplateFn } from '@pangular/core'

@Directive({
  attribute: 'pgIf'
})
export class IfDirective {
  @Input()
  public pgIf: boolean

  @Children()
  private template: TemplateFn
  
  render() {
    if (!this.pgIf) {
      return null
    }
    return this.template()
  }
}