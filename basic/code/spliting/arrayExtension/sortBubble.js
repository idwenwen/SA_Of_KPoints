import bigger from "../stringExtension/bigger"
import isBoolean from "../typeDiscrimination/isBoolean"
import isFunction from "../typeDiscrimination/isFunction"
import isNumber from "../typeDiscrimination/isNumber"

/**
 * 冒泡排序算法，针对原数组的进行排序。
 */
export default function bubble(arr, operation) {
  let index, subIndex,
  len = arr.length
  while (index !== 0 && subIndex !== 1) {
    // 初始化当前游标的位置
    index = 0
    subIndex = 1

    // 当且仅当辅游标位置小于len的情况，才会结束。
    while (subIndex < len) {
      const item1 = arr[index]
      const item2 = arr[subIndex]

      // 比较两份数据的大小。默认情况通过字符串编码来确定大小。
      const res = isFunction(operation) ? operation(item1, item2) : bigger(item1, item2)
      if (isBoolean(res) || (isNumber(res) && res > 0)) {
        arr[index] = item2
        arr[subIndex] = item1
      }

      // 游标改变
      index ++
      subIndex ++
      len --
    }
  }
  return arr
}