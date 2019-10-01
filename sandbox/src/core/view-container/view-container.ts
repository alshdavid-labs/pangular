import { BehaviorSubject, Subject } from 'rxjs'
import { h, Fragment } from 'preact'
import { ObjectProxy } from '../object-proxy'

export class ViewContainer {
  $tag = new BehaviorSubject<any>(Fragment)
  $context = new BehaviorSubject<any>(undefined)
  $onInit = new Subject<void>()
  $afterViewInit = new Subject<void>()
  $onChange = new Subject<void>()
  $onDestroy = new Subject<void>()
  $ref = new BehaviorSubject<HTMLElement | undefined>(undefined)
  directives: any[] = []
  objectProxy: ObjectProxy
  selector: string
  declarations: {}
  $props = new BehaviorSubject<any>(undefined)
  children: any

  addDirective(directive) {}
}