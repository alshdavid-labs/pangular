import { h } from 'preact'
import rw from 'reaction-wheel'
import { Wrapper } from '../components/wrapper'

export const y = (type, props, children) => {
  if (!props.__directives) {
    return h(type, props, children)
  }

  const instance = {}
  const instance$ = rw.create(instance)

  const Target = h(Wrapper, {
    instance,
    instance$,
    template: type,
    props,
  })

  return Target
}