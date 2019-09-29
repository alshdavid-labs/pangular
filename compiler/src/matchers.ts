export const templateRegex = new RegExp(/\{\{(.*?)\}\}/g)
export const dataBindingRegex = new RegExp(/\[(.*?)\]/g)
export const eventBindingRegex = new RegExp(/\((.*?)\)/g)
export const bananaRegex = new RegExp(/\[\((.*?)\)\]/g)
export const startsWithHash = (str: string) => str[0] === '#'
export const hasHandlebars = (str: string) => str.match(templateRegex)
export const hasEventBinding = (str: string) => str.match(eventBindingRegex)
export const hasPropertyBinding = (str: string) => str.match(dataBindingRegex)
export const hasPropertyAndEventBinding = (str: string) => str.match(bananaRegex)

export const replaceTemplates = (str: string) => {
  return str.replace(templateRegex, binding => {
    return `' + ctx.${binding.slice(2, -2)} + '`.trim()
  })
}