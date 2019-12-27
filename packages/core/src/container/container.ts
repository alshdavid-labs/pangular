import { BehaviorSubject, Subject } from "rxjs"
import { PreactLifeCycle, Target, ContextAccessor } from "../components"
import { h, Fragment } from "preact"
import { first } from "rxjs/operators"

export class Container {
  selector: string | undefined
  $lifecycle = new Subject<PreactLifeCycle>()
  $tag = new BehaviorSubject<any>(Fragment)
  $props: BehaviorSubject<any>
  $ref = new BehaviorSubject<HTMLElement | undefined>(undefined)
  $context = new BehaviorSubject<any>(undefined)
  $onInit = new Subject<void>()
  $afterViewInit = new Subject<void>()
  $onDestroy = new Subject<void>()
  instanceKeys = []
  declarations: Record<string, any> = {}
  $children = new BehaviorSubject<any>([])
  $childrenFn = new BehaviorSubject<any>(undefined)

  constructor(
    public tag: any = Fragment,
    public props: any = {},
    public directives: any[] = [],
    public children: any = undefined,
  ) {
    this.$props = new BehaviorSubject(this.props)
    for (const directive of this.directives) {
      this.applyDirective(directive)
    }
    this.onComponentLifecycle(PreactLifeCycle.didMount).then(() => {
      this.$onInit.next()
      this.$onInit.complete()
      this.$tag.next(this.tag)
    })
    this.onComponentLifecycle(PreactLifeCycle.didUpdate).then(() => {
      this.$afterViewInit.next()
      this.$afterViewInit.complete()
    })
    this.$ref.pipe(first(e => e !== undefined)).subscribe(el => {
      
    })
  }

  emitOutput(key: string, value: any) {
    const fn = this.$props.value[key]
    if (fn && typeof fn === 'function') {
      fn(value)
    }
  }

  onComponentLifecycle(eventName: PreactLifeCycle) {
    return this.$lifecycle.pipe(first(event => event === eventName)).toPromise()
  }

  applyDirective(directive) {
    directive._container = this
    this.$onInit.subscribe(() => {
      directive.onInit && directive.onInit()
    })
    this.$afterViewInit.subscribe(async () => {
      await this.$ref.pipe(first(e => e !== undefined)).toPromise()
      if (directive.render) {
        const template = directive.render()
        console.log(template)
        this.$childrenFn.next(template)
        // this.over = this.children = [h(Fragment, {}, directive.render())] as any
      }
      directive.ref = this.$ref.getValue()
      directive.afterViewInit && directive.afterViewInit()
    })
  }

  getComponent(
    forwardedProps?: Record<string, any>,
    forwardedChidlren?: any,
  ) {
    if (forwardedChidlren) {
      this.$children.next(forwardedChidlren)
    }
    if (forwardedProps) {
      this.props = forwardedProps
      this.$props.next(this.props)
    }
    const props = {
      $lifecycle: this.$lifecycle,
      $tag: this.$tag,
      $ref: this.$ref,
      $props: this.$props,
      $context: this.$context,
      $children: this.$children,
      $childrenFn: this.$childrenFn,
      forwardedProps: this.props,
      forwardedChidlren: this.$children.value,
    }
    // return h(Target, props)
    return h(Fragment,{}, [
        h(ContextAccessor, props),
        h(Target, props),
    ])
  }
}
