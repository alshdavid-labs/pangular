import { Component, y } from '@pangular/core'

const Template = ({ ctx }) => {
  return <div>Ok</div>
}

@Component({
  selector: 'app-root',
  template: Template
})
export class RootComponentNC {
  value = ''

  setValue(e: any) {
    this.value = e.target.value
  }
}

