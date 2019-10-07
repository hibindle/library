import { get } from 'lodash'

const exists = value => value !== undefined && value !== null

const interpolate = (str, data = {}) =>
  str.replace(/{([^{}]*)}/g, (variable, variableName) =>
    exists(data[variableName]) ? data[variableName] : variableName
  )



export const getCopy = messages => (key, params = {}, fallback) => {
  const thisKey = key
  const thisNode = get(key)(messages)
  switch (typeof thisNode) {
    case 'string':
      return interpolate(thisNode, params)

    case 'object':
      return Object.keys(thisNode).reduce((copies, key) => {
        const node = get(key)(thisNode)
        return Object.assign(copies, {
          [key]:
            typeof node === 'string'
              ? interpolate(node, params)
              : getCopy(messages)(
                `${thisKey}.${key}`,
                params,
                fallback
              )
        })
      }, {})

    default:
      return thisNode || fallback || thisKey || 'hi'
  }
}

export const hasCopy = messages => key => Boolean(get(key)(messages))

export const getFullCopyKey = (copyBase: string | undefined, copyKey: string) =>
  copyBase ? `${copyBase}.${copyKey}` : copyKey

export default {
  hasCopy,
  getCopy
}

