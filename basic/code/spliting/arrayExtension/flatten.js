import isArray from "../typeDiscrimination/isArray"

/**
 * 扁平化数组的层级，减少数组层级
 * @param {Array} arr 原数组
 * @param {Number} level 扁平化等级, 如果level是-1表示的全部拆解开
 */
export default function flatten(arr, level = 1) {
  // 如果level是0或者内容不是数组，返回原数值
  if (!isArray(arr) || level === 0) return isArray(arr) ? arr : [arr]

  const res = []
  for (const item of arr) {
    // 如果数据项是数组，则调用自身扁平化数组
    if (isArray(item)) {
      res.push(...flatten(item, level >= 0 ? level - 1 : level))
    } else {
      res.push(item)
    }
  }
  return res
}