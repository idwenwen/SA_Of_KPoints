import isNull from "./isNull";

export default function isObject(val) {
  return !isNull(val) && typeof val === 'object'
}