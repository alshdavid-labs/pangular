import { Initializer } from '@pangular/core'
import { RootComponent } from './root.component'
import { RootComponentNC } from './root.component.nc'

Initializer
  .rootComponent(RootComponentNC)
  .attachTo(document.body)