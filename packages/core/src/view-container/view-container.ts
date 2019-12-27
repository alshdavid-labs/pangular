import { StatefulEventEmitter, EventEmitter } from '../event-emitter'

// This is essentially a middleware on top of a Preact component which
// enables attaching directives, etc.
export class ViewContainer {
  $tag = new StatefulEventEmitter<any>(null)
  $context = new StatefulEventEmitter<any>(undefined)
  $onInit = new EventEmitter<void>()
  $afterViewInit = new EventEmitter<void>()
  $onChange = new EventEmitter<void>()
  $onDestroy = new EventEmitter<void>()
  $ref = new StatefulEventEmitter<HTMLElement | undefined>(undefined)
  directives: any[] = []
  selector: string
  declarations: {}
  $props = new StatefulEventEmitter<any>(undefined)
  children: any

  addDirective(directive) {}
}