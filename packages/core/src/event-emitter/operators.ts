import { Emitter } from "./emitter"

export const nthEvent = <T>(
  e: Emitter<T>, 
  n: number
): Promise<T> => {
  return new Promise(res => {
    let count = 0
    const subscription = e.subscribe(value => {
      count++
      if (count === n) {
        res(value)
        subscription.unsubscribe()
      }
    })
  })
}

export const first = <T>(
  e: Emitter<T>, 
  predicate: (value: T) => boolean = () => true
): Promise<T> => {
  return new Promise(res => {
    const subscription = e.subscribe(value => {
      const result = predicate(value)
      if (result === true) {
        res(value)
        subscription.unsubscribe()
      }
    })
  })
}

export const filter = <T>(
  e: Emitter<T>, 
  predicate: (value: T) => boolean = () => true
) => {
  return {
    subscribe: (cb: any) => {
      return e.subscribe(value => {
        const result = predicate(value)
        if (result === true) {
          cb()
        }
      })
    }
  }
}