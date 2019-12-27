import { BehaviorSubject, Subject } from '../event-emitter'

export class ViewContainer {
  $tag = new BehaviorSubject<any>(null)
  $context = new BehaviorSubject<any>(undefined)
  $onInit = new Subject<void>()
  $afterViewInit = new Subject<void>()
  $onChange = new Subject<void>()
  $onDestroy = new Subject<void>()
  $ref = new BehaviorSubject<HTMLElement | undefined>(undefined)
  directives: any[] = []
  selector: string
  declarations: {}
  $props = new BehaviorSubject<any>(undefined)
  children: any

  addDirective(directive) {}
}