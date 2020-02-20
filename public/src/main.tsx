import { h, render, Fragment } from 'preact'
import { Thing } from './thing'
import { A } from './a'

const App: any = new Thing()

// render(<App />, document.querySelector('#target'))
render(h(App, { test: 'from render' }), document.querySelector('#target'))


// render(h(() => h(A as any, {}, 'test'), {}), document.querySelector('#target'))



