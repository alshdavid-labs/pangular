// export const Structural = ({ action, template, ...props }: any) => {
//   return action(template, props)
// }

import { h, Fragment } from 'preact'

export const Structural: any = props => h(Fragment, props)