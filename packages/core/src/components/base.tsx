import { ViewContainer } from '../view-container'
import { Component, h } from 'preact'
import { DC } from './context'

export class BaseContainer extends Component<any, any> {
  vc: ViewContainer

  constructor(...args) {
    super(...args)
    this.vc = this.props.viewContainer || new ViewContainer()
    this.state = {
      props: this.vc.$props.getValue()
    }
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
    this.vc.$onInit.emit()
    this.vc.$onInit.complete()
  }

  componentDidMount() {
    this.emitContext()
    this.vc.children = this.props.children
    this.vc.$afterViewInit.emit()
    this.vc.$afterViewInit.complete()
  }

  componentDidUpdate() {
    this.emitContext()
    this.vc.$onChange.emit()
  }

  componentWillUnmount() {
    this.vc.$onDestroy.emit()
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
