// import { Container } from '@pangular/core'

export const getStructuralDirectives = (c: any): string[] => {
  const directives: string[] = []
  for (const key in c.declarations) {
    if (c.declarations[key]._isStructural === true) {
      directives.push(key)
    }
  }
  return directives
}

export const hasStructuralDirective = (d: string[], a: string): boolean => {
  for (const key of d) {
    if (a.includes(`d('${key}')`)) {
      return true
    }
  }
  return false
}