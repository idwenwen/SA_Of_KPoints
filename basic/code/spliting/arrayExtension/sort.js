import isArray from '../typeDiscrimination/isArray'
import bubble from './sortBubble'

function sort(arr, operation, method = sort.Bubble) {
  // 参数不是数组，返回原参数内容
  if (!isArray(arr)) return arr
  
  // 有sort方法，则使用原生sort方法
  if (Array.prototype.sort) {
    return arr.sort(operation)
  }

  // 无sort，则调用polyfill
  else {
    return method(arr, operation)
  }
}

// 为sort添加可排序方法。
sort.Bubble = bubble
sort.Select = null
sort.Quick = null
sort.Heap = null