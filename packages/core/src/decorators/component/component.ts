import { h, Fragment } from 'preact'
import { ViewContainer } from '../../view-container'
import { y, Template } from '../../components'
import { patchConstructor } from '../patches'

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

export function Component(options: ComponentOptions) {
  return patchConstructor('component', (instance: ComponentRender) => {
    const viewContainer = new ViewContainer()
    instance._viewContainer = viewContainer
    viewContainer.selector = options.selector
    viewContainer.declarations = initDeclarations(options.declarations)
    const template = getTemplate(instance, options)
    let fu = () => {}
    const ctx = makeProxy(instance, fu)

    const baseProps = { 
      _useViewContainer: true,
      _viewContainer: viewContainer,
      ctx,
      y 
    }
    
    viewContainer.$props.emit(baseProps)
    instance._render = () => y(template, baseProps)
    
    const onInit = () => {
      instance.onInit && instance.onInit()
    }

    const afterViewInit = () => {
      instance.afterViewInit && instance.afterViewInit()
    }

    const onDestroy = () => {
      instance.onDestroy && instance.onDestroy()
    }

    viewContainer.$onInit.toPromise().then(onInit)
    viewContainer.$afterViewInit.toPromise().then(afterViewInit)
    viewContainer.$onDestroy.toPromise().then(onDestroy)
    return instance
  })
}

const makeProxy = (instance, onChange) => {
  return new Proxy(instance, {
    set: (obj, prop, value) => {
      obj[prop] = value
      onChange()
      return true
    },
    get: (obj, prop) => {
      return obj[prop]
    }
  })
}

const getTemplate = (instance: any, options: any) => {
  if (options.template?.prototype?.templateType === 'tagged-template') {
    return options.template(instance)
  }
  return options.template
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