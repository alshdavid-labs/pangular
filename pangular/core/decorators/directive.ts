import { h, Fragment } from "preact"
import { patchConstructor } from "../patch/constructor"
import { getProtoValue, setProtoValue } from "../patch/proto-value"
import { setPrivateValue } from "../patch/private-value"
import rw from 'reaction-wheel'
import { Wrapper, TemplateProps } from '../components/wrapper'

type ComponentOptions<T> = {
  selector: string,
}

export const Directive = <T>(options: ComponentOptions<T>) => {
  const proto = {
    type: 'directive',
    selector: options.selector
  }
  return patchConstructor(proto, instance => {
    

    return instance
  }) 
}
