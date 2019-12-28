import { Component, h, Fragment } from "preact";
import { DC } from "./context";

export class ContextAccessor extends Component<any, any> {
  emitContext() {
    if (this.props.$context.value === this.context) {
      return
    }
    this.props.$context.emit(this.context)
  }

  componentDidMount() {
    this.emitContext()
  }

  componentDidUpdate() {
    this.emitContext()
  }

  componentWillUnmount() {
    this.emitContext()
  }

  render() {
    this.emitContext()
    return h(Fragment, {})
  }
}
ContextAccessor.contextType = DC