import { Component } from "preact";

export class Template extends Component<any, any> {
  componentDidMount() {
    this.props.forceUpdate && 
      this.props.forceUpdate(() => this.forceUpdate())
  }

  render() {
    return this.props.children
  }
}
