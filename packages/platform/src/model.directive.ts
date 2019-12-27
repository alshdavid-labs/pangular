import { HostElement, Directive, Input, Output, EventEmitter } from '@pangular/core'

@Directive({
  attribute: 'bindModel'
})
export class BindModelDirective {
  value: string | number = undefined!

  @HostElement()
  host: HTMLInputElement = undefined!

  @Output()
  bindModelChange = new EventEmitter()

  @Input()
  set bindModel(value: string | number) {
    if (this.value === value) {
      return
    }
    this.value = value
    this.bindModelChange.emit(this.value)
  }
  
  onInput = (event: any) => {
    this.bindModel = event.target.value
  }

  afterViewInit() {
    if (this.value) {
      this.host.value = this.value.toString()
    }
    this.host.addEventListener('input', this.onInput)
    this.host.addEventListener('blur', this.onInput)
  }

  onDestroy() {
    this.host.removeEventListener('input', this.onInput)
    this.host.removeEventListener('blur', this.onInput)
  }
}