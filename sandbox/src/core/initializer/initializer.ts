import { h, render } from 'preact'
import { DCP } from '../view-container'

const makeID = () => ((Math.random() * 10000000).toFixed(0)).toString()

interface ComponentDenitializer {
  destroy(): void
}

interface ComponentInitializer {
  component: any
  injectables: Record<string, any>
  rootComponent(component: any): ComponentInitializer
  provide(injectables: Record<string, any> | Array<any>): ComponentInitializer
  attachTo(outlet: HTMLElement): ComponentDenitializer
}

export const Initializer: ComponentInitializer = {
  component: undefined,
  injectables: {},

  rootComponent(component) {
    this.component = component
    return this
  },

  provide(injectables) {
    if (Array.isArray(injectables)) {
      for (const injectable of injectables) {
        this.injectables[makeID()] = injectable
      } 
    } else {
      this.injectables = {
        ...this.injectables,
        ...injectables
      }
    }
    return this
  },

  attachTo(outlet) {
    if (!this.component) {
      throw new Error('Please insert component')
    }
    const component = new (this.component as any)()
    console.log(component)
    const C = () => component._render()
    if (this.injectables) {
      const app = h(
        DCP, 
        { value: this.injectables }, 
        h(C, {})
      )
      render(app, outlet)
    } else {
      const app = h(C, {})
      render(app, outlet)
    }
    return {
      destroy() {
        render(null, outlet)
      }
    }
  }
}