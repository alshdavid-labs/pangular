void async function main(){
  const path = window.location.pathname
  if (path === '/') {
    return
  }
  if (path === '/data-binding') {
    return import('~/cases/data-binding')
  }
  if (path === '/passing-props') {
    return import('~/cases/passing-props')
  }
  if (path === '/no-compiler/container-simple') {
    return import('~/cases/no-compiler/container-simple')
  }
  if (path === '/no-compiler/container-toggle') {
    return import('~/cases/no-compiler/container-toggle')
  }
}()

