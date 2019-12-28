import { h, Fragment, Component } from "preact"
import { Container } from '../container'

export class ControllerPersister extends Component<any, any> {
  ctrl = new Container(
    this.props.tag, 
    this.props.props, 
    this.props.directives, 
    this.props.selectedChildren
  )

  render() {
    if (!this.ctrl) {
      return h(Fragment, {})
    }
    return this.ctrl.getComponent(
      this.props.props, 
      this.props.selectedChildren
    )
  }
}