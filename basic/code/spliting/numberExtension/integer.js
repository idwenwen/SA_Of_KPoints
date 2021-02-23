import isNumber from "../typeDiscrimination/isNumber";

export default function integer(val) {
  if (isNumber(val)) {
    return val.toFixed(0)
  }
  return ''
}