import { h, Fragment, Component } from 'preact'
import { y } from '../container'
import { Subscription } from '../event-emitter'

export class ComponentWrapper extends Component<any, any> {
  subscription: Subscription

  state = {
    ctx: this.props.proxy.dispenceProxy()
  }

  componentDidMount() {
    this.subscription = this.props.proxy.$proxy
      .subscribe(ctx => this.setState({ ctx }))
  }

  componentWillUnmount() {
    this.subscription.unsubscribe()
  }

  getDeclaration = (name: string) => {
    const component = this.props.declarations[name]
    if (!component) {
      throw new Error(`Component with tag "${name}" does not exist, did you forget to declare it?`)
    }
    return component
  }

  render() {
    return h(this.props.template, { 
      y,
      Fragment,
      d: this.getDeclaration,
      ctx: this.state.ctx,
      children: this.props.children
    })
  }
}

export const createComponentWrapper = (
  proxy, template, declarations
) => () => h(ComponentWrapper, { proxy, template, declarations })