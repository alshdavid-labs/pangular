void async function main(){
  const path = window.location.pathname
  if (path === '/') {
    return
  }
  await import('~/cases' + path)
}()

