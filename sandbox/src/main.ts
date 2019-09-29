import { Initializer } from "@pangular/core";
import { RootComponent } from './cases/data-binding-directive'

Initializer
  .rootComponent(RootComponent)
  .attachTo(document.body)