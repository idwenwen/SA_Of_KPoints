import isObject from "./isObject"

/**
 * To Judge do Object is created by null
 */
export default function isEmpty(val) {
  return isObject(val) && !(val instanceof Object)
}