import { h, Fragment, Component } from 'preact'
import { y } from '../container'
import { Subscription } from '../event-emitter'
import { Structural } from './structural'

type ComponentWrapperProps = {
  proxy: any,
  template: any,
  declarations: any
  forceUpdateDispenser: any,
}

export class ComponentWrapper extends Component<ComponentWrapperProps, any> {
  componentDidMount(){
    this.props.forceUpdateDispenser(() => this.forceUpdate())
  }

  getDeclaration = (name: string) => {
    const component = this.props.declarations[name]
    if (!component) {
      throw new Error(`Component with tag "${name}" does not exist, did you forget to declare it?`)
    }
    return component
  }

  mergeCTX = (ctx, fn: (mctx) => void) => (ictx) => fn({ ...ctx, ...ictx })

  render() {
    return h(this.props.template, { 
      y,
      Fragment,
      d: this.getDeclaration,
      ctx: this.props.proxy,
      children: this.props.children,
      m: this.mergeCTX,
      Structural
    })
  }
}

export const createComponentWrapper = (
  proxy, 
  template, 
  declarations,
  forceUpdateDispenser,
) => () => h(ComponentWrapper, { proxy, template, declarations, forceUpdateDispenser })