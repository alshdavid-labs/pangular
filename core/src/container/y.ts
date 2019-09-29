import { h } from "preact"
import { ControllerPersister } from '../components'

export function y(tag: any, props: Record<string, any> = {}, ...children: any) {
  if (!props) {
    props = {}
  }
  let selectedChildren = children
  if (children.length && Array.isArray(children[0])) {
    selectedChildren = children[0]
  }
  const directives = props._directives || []
  if (directives.length === 0) {
    return h(tag, props, children)
  }
  const settings = {
    tag,
    props,
    directives,
    selectedChildren,
  }
  return h(ControllerPersister, settings)
}
