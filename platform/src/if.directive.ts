import { Directive, Children, Input } from '@pangular/core'

@Directive({
  attribute: 'pgIf'
})
export class IfDirective {
  @Children()
  children: any = undefined

  @Input()
  pgIf: boolean = undefined!

  render() {
    if (this.pgIf === false) {
      return undefined
    }
    return this.children[0]()
  }
}


// const T = /*html*/`
//   <div>
//     <div *pgIf="value">Hi</div>
//   </div>
// `

// const T2 = /*html*/`
//   <div>
//     <Structural [pgIf]="value">
//       <div>Hi</div>
//     </Structural>
//   </div>
// `

// const C = ({ ctx, tctx, d }) => {
//   return y('div', {}, [
//     y('div', {}, [ 'Ok' ]),
//     y(Fragment, { pgIf: ctx.value, _tctx: tctx, _directives: [ d('pgIf') ] }, 
//       tctx =>  y('div', {}, [ 'Hi' ])
//     )
//   ])
// }
