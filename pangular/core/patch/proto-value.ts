export const getProtoValue = (target: any, key: any) => target.prototype._private[key]
export const setProtoValue = (target: any, key: any, value: any) => {
  if (!target.prototype) {
    target.prototype = {}
  }
  if (!target.prototype._private) {
    target.prototype._private = {}
  }
  target.prototype._private[key] = value
}