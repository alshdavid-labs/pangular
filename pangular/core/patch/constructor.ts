export function patchConstructor(protos: Record<any, any>, fn: (instance: any, constructor: any, ...args: any[]) => void) {
  return function(constructor: any): any {
    
    function construct(...args: any[]) {
      const instance = new constructor(...args)
      return fn(instance, constructor, ...args)
    }

    construct.prototype._private = {}
    for (const proto in protos) {
      construct.prototype._private[proto] = protos[proto]
    }
    return construct
  }
}

