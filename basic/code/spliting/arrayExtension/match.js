import isFunction from "../typeDiscrimination/isFunction"

/**
 * 找出当前的数据
 * @param {Array} arr 原数组
 * @param {RegExp | Function} match 匹配使用的正则表达式 或者方法。
 */
export default function match(arr, match) {
  arr.findIndex((value, index, origin) => {
    // 传递匹配方法
    if (isFunction(match)) {
      return match(value, index, origin)
    } else {
      // 正则匹配
      return !!value.toString().match(match)
    }
  })
}