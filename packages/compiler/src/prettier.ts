declare const __constants: any

type PrettyWindow = {
  prettier?: {
    format(...args: any[]): void
  },
  prettierPlugins?: {
    babylon: any
  }
}

export const print = (exp: string) => {
  setTimeout(() => {
    if (
      typeof __constants !== 'undefined' && 
      __constants.MODE === 'production') {
      return
    }
    console.log((window as PrettyWindow).prettier?.format(exp, {
      parser: 'babel',
      plugins: [(window as PrettyWindow).prettierPlugins?.babylon],
      printWidth: 30
    }))
  })
}
