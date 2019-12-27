// import { Directive, Child, Input } from '@pangular/core'

// @Directive({
//   attribute: 'pgIf'
// })
// export class IfDirective {
//   @Child()
//   processor: any = undefined!

//   @Input()
//   pgFor: any[] = []

//   render() {
//     const items: any[] = []
//     for (const item of this.pgFor) {
//       const result = this.processor({ item })
//       items.push(result)
//     }
//   }
// }

// const T = /*html*/`
//   <div>
//     <div *pgFor="let value of values">Hi</div>
//   </div>
// `

// const T2 = /*html*/`
//   <div>
//     <Structural [pgFor]="values" [_let]="{ $implicit: 'value' }">
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
