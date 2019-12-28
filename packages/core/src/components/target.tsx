import { h, Fragment, Component, render } from "preact"
import { DC } from "./context"

export enum PreactLifeCycle {
  didMount = "componentDidMount",
  didUpdate = "componentDidUpdate",
  willUnmount = "componentWillUnmount"
}

export class Target extends Component<any, any> {
  state: any = {
    tag: Fragment,
    children: [],
    childrenFn: undefined,
    props: this.props.forwardedProps
  }

  componentDidMount() {
    this.props.$tag.subscribe(tag => this.setState({ tag }))
    this.props.$children.subscribe(children => this.setState({ children }))
    this.props.$childrenFn.subscribe(childrenFn => this.setState({ childrenFn }))

    this.props.$props.subscribe(props => {
      this.setState({ props })
    })
    this.props.$lifecycle.emit(PreactLifeCycle.didMount)
  }

  componentDidUpdate() {
    this.props.$lifecycle.emit(PreactLifeCycle.didUpdate)
  }

  componentWillUnmount() {
    this.props.$lifecycle.emit(PreactLifeCycle.willUnmount)
  }

  getRef = (el: HTMLElement | undefined): void => {
    if (el) {
      this.props.$ref.emit(el)
    }
  }

  render() {
    const props = {
      ...this.props.$props.value,
      ref: el => this.getRef(el)
    }
    return h(
      this.state.tag, 
      props, 
      this.state.childrenFn || this.state.children
    )
  }
}
