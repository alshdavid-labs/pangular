import { Directive, Input, Children, TemplateFn } from '@pangular/core'

@Directive({
  attribute: 'pgIf',
  structural: true
})
export class IfDirective {
  @Input()
  public pgIf: boolean

  @Children()
  private template: TemplateFn

  ngInit() {
    console.log('init')
  }
  
  render() {
    console.log(this.template)
    if (!this.pgIf) {
      return null
    }
    return this.template()
  }
}