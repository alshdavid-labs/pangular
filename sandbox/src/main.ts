import { Initializer } from "@pangular/core";
import { RootComponent } from './cases/test'

Initializer
  .rootComponent(RootComponent)
  .attachTo(document.body)