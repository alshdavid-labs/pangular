   void async function main(){
    const path = window.location.pathname
    if (path === '/') {
      return
    }
    if (path === '/data-binding') {
      return import('./cases/data-binding')
    }
    if (path === '/data-binding-directive') {
      return import('./cases/data-binding-directive')
    }
    if (path === '/event-binding') {
      return import('./cases/event-binding')
    }
    if (path === '/multiple-components') {
      return import('./cases/multiple-components')
    }
    if (path === '/simple') {
      return import('./cases/simple')
    }
  }()

 