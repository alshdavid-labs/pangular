import { h, Fragment } from 'preact'
import { Directive, Input, Template, TemplateFn } from '@pangular/core'

@Directive({
  attribute: 'pgIf',
  structural: true
})
export class IfDirective {
  @Input()
  public pgIf: boolean

  @Template()
  private template: TemplateFn
 
  render() {
    console.log('render')
    if (!this.pgIf) {
      return h(Fragment, {})
    }
    return this.template()
  }
}