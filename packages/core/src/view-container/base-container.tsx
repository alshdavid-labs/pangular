import { ViewContainer } from './view-container'
import { Component, h } from 'preact'
import { DC } from './context'

export class TemplateRender extends Component<any, any> {
  render() {
    return null
  }
}

export class BaseContainer extends Component<any, any> {
  vc: ViewContainer

  constructor(...args) {
    super(...args)
    this.vc = this.props.viewContainer || new ViewContainer()
    this.state = {
      props: this.vc.$props.value
    }
  }

  emitContext() {
    if (this.vc.$context.value === this.context) {
      return
    }
    this.vc.$context.next(this.context)
  }

  componentWillMount() {
    // this.state.forwardedProps.viewContainerRef && this.state.forwardedProps.viewContainerRef(this.vc)
    this.emitContext()    
    this.vc.$props.subscribe(props => this.setState({ props }))
    this.vc.$onInit.next()
    this.vc.$onInit.complete()
  }

  componentDidMount() {
    this.emitContext()
    if (this.vc.objectProxy) {
      this.vc.objectProxy.$value.subscribe((c) => {
        this.forceUpdate()
      })
    }
    this.vc.children = this.props.children
    this.vc.$afterViewInit.next()
    this.vc.$afterViewInit.complete()
  }

  componentDidUpdate() {
    this.emitContext()
    this.vc.$onChange.next()
  }

  componentWillUnmount() {
    this.vc.$onDestroy.next()
    this.vc.$onDestroy.complete()
  }

  getRef(el: any) {
    if (!el) {
      return
    }
    this.vc.$ref.next(el)
  }

  getDeclaration = (name: string) => {
    const component = this.vc.declarations[name]
    if (!component) {
      throw new Error(`Component with tag "${name}" does not exist, did you forget to declare it?`)
    }
    return component
  }

  render() {
    this.emitContext()
    const props = {
      ...this.state.props,
      ref: el => this.getRef(el),
      d: this.getDeclaration,
      _directives: undefined,
      viewContainerRef: undefined,
    }
    return h(
      this.props.tag, 
      props, 
      this.props.children
    )
  }
}
BaseContainer.contextType = DC
