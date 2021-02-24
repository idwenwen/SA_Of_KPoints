export default function insert(arr, index, ...vals) {
  return arr.splice(index, 0, ...vals)
}