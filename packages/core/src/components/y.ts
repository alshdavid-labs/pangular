import { h, VNode } from 'preact'
import { BaseContainer} from './base'
import { ViewContainer} from '../view-container'

export interface DefaultYProps {
  _directives?: any[]
  _objectProxy?: any
  _useViewContainer?: boolean
  _viewContainer?: ViewContainer
}

export const y = (
  tag: any, 
  initialProps: any, 
  ...children: any[]
): VNode<any> => {
  let props: any
  if (!initialProps) {
    props = {}
  } else {
    props = initialProps
  }
  let selectedChildren = children
  if (children.length && Array.isArray(children[0])) {
    selectedChildren = children[0]
  }
  let useViewContainer = false
  const directives = props._directives || []
  if (directives.length !== 0) {
    useViewContainer = true
  }
  if (
    typeof props._useViewContainer !== 'undefined' && 
    props._useViewContainer === false
  ) {
    useViewContainer = false
    props._useViewContainer = undefined
  } 
  if (
    typeof props._useViewContainer !== 'undefined' && 
    props._useViewContainer === true
  ) {
    useViewContainer = true
    props._useViewContainer = undefined
  } 
  if (useViewContainer === false) {
    // Skip VC init if unneeded
    return h(tag, props, children)
  }
  let vc: ViewContainer
  if (props._viewContainer) {
    vc = props._viewContainer
    props._viewContainer = undefined
  } else {
    vc = new ViewContainer()
    vc.$props.emit(props)
  }
  for (const directive of directives) {
    vc.addDirective(directive)
  }
  return h(
    BaseContainer, 
    { viewContainer: vc, tag }, 
    selectedChildren
  )
}
