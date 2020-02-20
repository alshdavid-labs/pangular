import { h } from "preact"
import * as preact from "preact"
import rw from 'reaction-wheel'
import { DC } from './context'
import { y } from './y'
import { setPrivateValue, getPrivateValue } from "../patch/private-value"

export type PreactH = typeof preact.h
export type TemplateProps<T> = {
  state: T
  h: PreactH,
  props: Record<any, any>
}

export type WrapperProps = {
  instance: any,
  instance$: rw.ProxySubscriber<any>
  template: (props: TemplateProps<any>) => h.JSX.Element
  props: any,
  declarations?: Record<string, any>
  selector?: string,
}

export class Wrapper extends preact.Component<WrapperProps> {
  hasViewInit = false
  hasInit = false
  sub = this.props.instance$.subscribe(() => this.forceUpdate())
  services = {}
  ref: HTMLElement | undefined

  componentWillUnmount() {
    this.sub.unsubscribe()
    this.runLifecycleHook('onDestroy')
  }

  componentWillUpdate() {
    this.runLifecycleHook('onUpdate')
  }

  shouldComponentUpdate(nextProps) {
    for (const prop in nextProps.props) {
      if (nextProps.instance[prop] === nextProps.props[prop]) {
        return false
      }
    }
    return true
  }

  runLifecycleHook(method: string) {
    this.runDirectiveLifecycle(method)
    this.props.instance$[method] && this.props.instance$[method]()
  }

  runDirectiveLifecycle(method: string) {
    if (this.props.props.__directives) {
      for (const directive of this.props.props.__directives) {
        setPrivateValue(directive, 'ref', this.ref)
        directive[method] && directive[method]()
      }
    }
  }

  getDeclaration = (name: string) => {
    const declaration = this.props.declarations[name]
    if (!declaration) {
      throw new Error(`Component with tag "${name}" does not exist, did you forget to declare it?`)
    }
    const Component = declaration.value
    return Component
  }

  onInit() {
    if (this.hasInit === false) {
      this.hasInit = true
      this.runLifecycleHook('onInit')
    }
  }

  afterViewInit() {
    if (this.hasViewInit === false) {
      this.hasViewInit = true
      this.runLifecycleHook('afterViewInit')
    }
  }

  getRef = (el: HTMLElement | undefined) => {
    if (el !== undefined) {
      this.ref = el
      this.afterViewInit()
    }
  }

  render() {
    return h(DC.Consumer, { children: null }, (context: any) => {
      this.services = context
      this.onInit()
      if (typeof this.props.template === 'string') {
        return h(this.props.template, {
          ...this.props.props,
          ref: this.getRef
        })
      }
      return h(this.props.template, { 
        state: this.props.instance$,
        ctx: this.props.instance$,
        Fragment: preact.Fragment,
        h,
        y,
        d: this.getDeclaration,
        props: this.props.props,
        ref: this.getRef,
      })
    })
  }
}

