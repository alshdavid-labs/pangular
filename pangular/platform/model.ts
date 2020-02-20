const Directive: any = {}
const Input: any = {}
const HostListener: any = {}
const Output: any = {}
const EventEmitter: any = {}


@Directive({
  selector: 'bindModel'
})
export class ModelDirective {
  @Input()
  bindModel
  
  @Output()
  bindModelChange = new EventEmitter()
  
  @HostListener()
  onInput() {

  }
}