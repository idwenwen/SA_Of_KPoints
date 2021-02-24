import isFunction from "../typeDiscrimination/isFunction";
import each from "./each";

/**
 * 替换原有内容，
 * @param {Array} arr 原数组
 * @param {RegExp | Function} match 匹配
 * @param {Any} rep 替代内容
 */
export default function replace(arr, match, rep) {
  const result = function compare(val) {
    let matched = false
    if (isFunction(match)) {
      matched = match(val)
    } else {
      matched = !!val.match(match) 
    }
    return matched && (isFunction(rep) ? rep(val) : rep)
  }
  return each(arr, function (val) {
    const compRes = result(val)
    return compRes ? compRes : val
  })
}