import isFunction from "../typeDiscrimination/isFunction";

export default function each(arr, operation, reserve = false) {
  arr = reserve ? arr.reserve() : arr

  const res = []
  for (let i = 0; i < arr.length; i++) {
    res.push(operation(val, reserve ? arr.length - i : i, arr))
  }

  return reserve ? res.reserve() : res
}