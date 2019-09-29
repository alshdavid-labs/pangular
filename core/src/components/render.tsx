import { h } from 'preact'

export interface RenderProps {
    target: () => any
    props?: Record<any, any>
}

export const Render = ({ target, props = {} }: RenderProps) => {
  return h(target, { ...props })
}

// This is just a helper for development