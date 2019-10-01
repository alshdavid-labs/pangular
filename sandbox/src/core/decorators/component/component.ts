import { h, Fragment } from 'preact'
import { ViewContainer, y } from '../../view-container'
import { ObjectProxy, useObjectAsSource, createContext, patchObject } from '../../object-proxy'
import { patchConstructor } from '../patches'
import { Subscription } from 'rxjs'

export type DecoratedComponent<T = {}> = ComponentRender & T

export interface ComponentRender {
  _viewContainer: ViewContainer
  _render: (props?: any) => h.JSX.Element
  _objectProxy: ObjectProxy
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

export function Component(options: ComponentOptions) {
  return patchConstructor('component', (instance: ComponentRender, constructor) => {
    const subscription = new Subscription()
    const objectProxy = new ObjectProxy()
    const viewContainer = new ViewContainer()
    instance._viewContainer = viewContainer
    viewContainer.selector = options.selector
    viewContainer.objectProxy = objectProxy
    viewContainer.declarations = initDeclarations(options.declarations)
    console.log(viewContainer.declarations)

    useObjectAsSource(objectProxy, instance)
    const ctx = createContext(objectProxy)

    objectProxy.$value.subscribe(() => patchObject(objectProxy, instance))
    objectProxy.$value.subscribe(() => patchObject(objectProxy, ctx))


    const baseProps = { 
      _useViewContainer: true,
      _viewContainer: viewContainer,
    }
    const props = {
      ctx, y 
    }
    viewContainer.$props.next(props)
    instance._render = (props) => y(options.template, baseProps)
    
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


