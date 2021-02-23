/**
 * 截取数组之中的某一段数据。
 */
export default function split(arr, start, end) {
  let len = arr.length
  const res = []
  
  // 下标转换。
  if (start > end) {
    let mid = start
    start = end
    end = mid
  }

  if (end > len) end = len
  if (start < 0) start = 0

  for (let i = start; i < end; i++) {
    res.push(arr[i])
  }

  return res
}