import { ViewContainer } from '../view-container'
import { Component, h, VNode } from 'preact'
import { DC } from './context'

type BaseContainerProps = {
  viewContainer: ViewContainer,
  tag: any
}

export class BaseContainer extends Component<BaseContainerProps, {}> {
  get vc(): ViewContainer {
    return this.props.viewContainer
  }

  get forwardedProps(): any {
    return this.vc.$props.getValue()
  }

  emitContext() {
    if (this.vc.$context.getValue() === this.context) {
      return
    }
    this.vc.$context.emit(this.context)
  }

  componentWillMount() {
    this.emitContext()    
    this.vc.$props.subscribe(props => this.setState({ props }))
    this.vc.$onInit.complete()
  }

  componentDidMount() {
    this.emitContext()
    this.vc.children = this.props.children
    this.vc.$afterViewInit.complete()
  }

  componentDidUpdate() {
    this.emitContext()
    this.vc.$onChange.emit()
  }

  componentWillUnmount() {
    this.vc.$onDestroy.complete()
  }

  getRef(el: any) {
    if (!el) {
      return
    }
    this.vc.$ref.emit(el)
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
      ...this.forwardedProps,
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
