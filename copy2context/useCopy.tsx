import { useContext } from 'react'
import { CopyContext } from "./Context"
import util, { getFullCopyKey } from './utils'

const useCopy = (copyBase?: string) => {
  const copy = useContext(CopyContext)

  if (!copy) {
    console.error(
      'No copy available in context, is your setContext setup correctly?'
    )
    return {
      getCopy: (copyKey: string) => copyKey,
      hasCopy: () => false
    }
  }

  const getCopy = (copyKey: string, ...args): string =>
    util.getCopy(getFullCopyKey(copyBase, copyKey), ...args)

  const hasCopy = (copyKey: string): string =>
    util.hasCopy(getFullCopyKey(copyBase, copyKey))

  return { getCopy, hasCopy }
}

export default useCopy
