import { h } from 'preact'

export type RenderProps<T> = T & {
  component: any,
}

export const Render = <T,>({ component, ...props }: RenderProps<T>) => h(component as any, { ...props })