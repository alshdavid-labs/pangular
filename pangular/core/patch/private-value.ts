export const getPrivateValue = (target: any, key?: any) => {
  if (!target.__private) {
    return
  }
  if (!key) {
    return target.__private
  }
  return target.__private[key]
}
export const setPrivateValue = (target: any, key: any, value: any) => {
  if (!target.__private) {
    target.__private = {}
  }
  target.__private[key] = value
}