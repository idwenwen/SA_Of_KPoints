/**
 * 判定数组之中是否存在比对值。
 * compareVal: 需要比对的数值，无需传递方法。
 */
export default function has(arr, compareVal) {
  return arr.find((value) => {
    return value === compareVal
  })
}