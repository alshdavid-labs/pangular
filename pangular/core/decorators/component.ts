import { h, Fragment } from "preact"
import { patchConstructor } from "../patch/constructor"
import { getProtoValue, setProtoValue } from "../patch/proto-value"
import { setPrivateValue } from "../patch/private-value"
import rw from 'reaction-wheel'
import { Wrapper, TemplateProps } from '../components/wrapper'

export enum InstanceType {
  component = 'component'
}

type ComponentOptions<T> = {
  template: (options: TemplateProps<T>) => h.JSX.Element,
  declarations?: any[],
  selector: string,
}

type Declaration = {
  type: string,
  value: any
}

export const Component = <T>(options: ComponentOptions<T>) => {
  const proto = {
    type: InstanceType.component,
    selector: options.selector
  }
  return patchConstructor(proto, instance => {
    const instance$ = rw.create(instance)

    const Target = (props: any) => {
      setPrivateValue(instance, 'props', props)
      return h(Wrapper, {
        instance,
        instance$,
        template: prepareTemplate(options.template),
        declarations: prepareDeclarations(options.declarations),
        props,
        selector: options.selector,
      })
    }
    setProtoValue(Target, 'type', InstanceType.component)
    setProtoValue(Target, 'selector', options.selector)

    return Target
  }) 
}

const prepareDeclarations = (optionsDeclarations: any[] = []) => {
  const declarations: Record<string, Declaration> = {}

  for (const Value of optionsDeclarations) {

    const selector = getProtoValue(Value, 'selector')
    const type = getProtoValue(Value, 'type')

    if (type === InstanceType.component) {
      declarations[selector] = {
        type, 
        value: new Value()
      }
    }
  }

  return declarations
}

const prepareTemplate = (template: any) => {
  if (template.prototype && template.prototype.templateType == 'tagged-template') {
    return (template as any)({})
  }
  return template
}