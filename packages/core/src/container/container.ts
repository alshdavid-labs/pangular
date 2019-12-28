import { StatefulEventEmitter, EventEmitter, first } from "../event-emitter"
import { PreactLifeCycle, Target, ContextAccessor } from "../components"
import { h, Fragment } from "preact"

export class Container {
  selector: string | undefined
  $lifecycle = new EventEmitter<PreactLifeCycle>()
  $tag = new StatefulEventEmitter<any>(Fragment)
  $props: StatefulEventEmitter<any>
  $ref = new StatefulEventEmitter<HTMLElement | undefined>(undefined)
  $context = new StatefulEventEmitter<any>(undefined)
  $onInit = new EventEmitter<void>()
  $afterViewInit = new EventEmitter<void>()
  $onDestroy = new EventEmitter<void>()
  instanceKeys = []
  declarations: Record<string, any> = {}
  $children = new StatefulEventEmitter<any>([])
  $childrenFn = new StatefulEventEmitter<any>(undefined)

  constructor(
    public tag: any = Fragment,
    public props: any = {},
    public directives: any[] = [],
    public children: any = undefined,
  ) {
    this.$props = new StatefulEventEmitter(this.props)
    for (const directive of this.directives) {
      this.applyDirective(directive)
    }
    this.onComponentLifecycle(PreactLifeCycle.didMount).then(() => {
      this.$onInit.emit()
      this.$onInit.complete()
      this.$tag.emit(this.tag)
    })
    this.onComponentLifecycle(PreactLifeCycle.didUpdate).then(() => {
      this.$afterViewInit.emit()
      this.$afterViewInit.complete()
    })
    // first(this.$ref, e => e !== undefined).then(console.log)
  }

  emitOutput(key: string, value: any) {
    const fn = this.$props.getValue()[key]
    if (fn && typeof fn === 'function') {
      fn(value)
    }
  }

  onComponentLifecycle(eventName: PreactLifeCycle) {
    return first(this.$lifecycle, event => event === eventName)
  }

  applyDirective(directive) {
    directive._container = this
    this.$onInit.subscribe(() => {
      directive.onInit && directive.onInit()
    })
    this.$afterViewInit.subscribe(async () => {
      await first(this.$ref, e => e !== undefined)
      if (directive.render) {
        const template = directive.render()
        this.$childrenFn.emit(template)
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
      this.$children.emit(forwardedChidlren)
    }
    if (forwardedProps) {
      this.props = forwardedProps
      this.$props.emit(this.props)
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
      forwardedChidlren: this.$children.getValue(),
    }
    // return h(Target, props)
    return h(Fragment,{}, [
        h(ContextAccessor, props),
        h(Target, props),
    ])
  }
}
