import { Initializer } from '@pangular/core'
import { RootComponent } from './root.component'
import { RootComponentNC } from './root.no-compiler'

Initializer
  .rootComponent(RootComponent)
  .attachTo(document.body)