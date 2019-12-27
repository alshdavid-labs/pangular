import { h, Component as PComponent } from 'preact'
import { ViewContainer, y } from '../../view-container'
import { patchConstructor } from '../patches'
import { Subscription } from 'rxjs'

export type DecoratedComponent<T = {}> = ComponentRender & T

export interface ComponentRender {
  _viewContainer: ViewContainer
  _render: (props?: any) => h.JSX.Element
  onInit?(): void
  afterViewInit?(): void
  onDestroy?(): void
}

export interface TemplateProps {
  ctx: Record<string, any>
  declarations: Record<string, any>
  h: any
  Fragment: any
}

export interface ComponentOptions {
  selector: string
  declarations?: any[]
  template: ((props: TemplateProps) => void) | string | any
}

const initDeclarations = (declarations: any[] = []) => {
  const result = {}
  for (const Value of declarations) {
    const value: ComponentRender = new Value()
    if (Value.prototype.type === 'component') {
      result[value._viewContainer.selector] = (props) => value._render(props)
    }
  }
  return result
}

class Template extends PComponent<any, any> {
  componentDidMount() {
    this.props.forceUpdate && 
      this.props.forceUpdate(() => this.forceUpdate())
  }

  render() {
    return this.props.children
  }
}

export function Component(options: ComponentOptions) {
  return patchConstructor('component', (instance: ComponentRender) => {
    const subscription = new Subscription()
    const viewContainer = new ViewContainer()
    instance._viewContainer = viewContainer
    viewContainer.selector = options.selector
    viewContainer.declarations = initDeclarations(options.declarations)

    let template = null
    if (options.template.prototype.templateType === 'tagged-template') {
      template = options.template(instance)
    } else {
      template = options.template
    }

    let fu = () => {}
    const ctx = new Proxy(instance, {
      set: (obj, prop, value) => {
        obj[prop] = value
        fu()
        return true
      },
      get: (obj, prop) => {
        return obj[prop]
      }
    })

    const baseProps = { 
      _useViewContainer: true,
      _viewContainer: viewContainer,
    }
    
    const props = {
      ctx, y 
    }

    viewContainer.$props.next(props)

    instance._render = () => y(
      Template, 
      { forceUpdate: forceUpdate => fu = forceUpdate }, 
      y(template, baseProps)
    )
    
    const onInit = () => {
      instance.onInit && instance.onInit()
    }

    const afterViewInit = () => {
      instance.afterViewInit && instance.afterViewInit()
    }

    const onDestroy = () => {
      instance.onDestroy && instance.onDestroy()
    }

    subscription.add(viewContainer.$onInit.subscribe(onInit))
    subscription.add(viewContainer.$afterViewInit.subscribe(afterViewInit))
    subscription.add(viewContainer.$onDestroy.subscribe(onDestroy))
    return instance
  })
}


