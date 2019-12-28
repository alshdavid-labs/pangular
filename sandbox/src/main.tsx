/** @jsx h */
import { h, render } from 'preact'

const paths = [
  '/',
  '/data-binding',
  '/data-binding-directive',
  '/event-binding',
  '/multiple-components',
  '/simple',
  '/for-directive/no-compiler',
  '/for-directive/compact',
  '/for-directive/expanded',
  '/if-directive/no-compiler',
  '/if-directive/compact',
  '/if-directive/expanded',
]

const App = () => <div 
  style={{ position: 'fixed', bottom: 0, margin: '30px' }}>
  {
    paths.map(path => <a 
      style={{ display: 'block', margin: '10px' }} 
      href={path}>
      {path}
    </a>)
  }
</div>

render(<App/>, document.getElementById('nav'))

const location = window.location.pathname
for (const path of paths) {
  if (location === '/') {
    break
  }
  if (location === path) {
    import('./cases' + path)
    break
  }
}
  



