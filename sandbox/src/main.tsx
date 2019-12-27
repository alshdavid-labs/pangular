/** @jsx h */
import { h, render } from 'preact'

const paths = [
  '/data-binding',
  '/data-binding-directive',
  '/event-binding',
  '/multiple-components',
  '/simple'
]

const renderHome = () => {
  const App = () => <div>{
    paths.map(path => <div><a href={path}>{path}</a></div>)
  }</div>
  render(<App/>, document.body)
}

void async function main() {
  const location = window.location.pathname
  if (location === '/') {
    return renderHome()
  }
  for (const path of paths) {
    if (location === path) {
      import('./cases' + path)
      break
    }
  }
}()



