import { Initializer } from '@pangular/core'
import { RootComponent } from './root.component'

Initializer
  .rootComponent(RootComponent)
  .attachTo(document.body)