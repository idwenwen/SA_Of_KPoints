import isNull from './isNull'
import isUndefined from './isUndefined'

export default function isNil(val) {
  return isNull(val) && isUndefined(val)
}