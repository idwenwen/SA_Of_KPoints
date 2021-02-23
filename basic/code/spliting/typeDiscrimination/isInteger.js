import isNumber from "./isNumber";

export default function isInteger(val) {
  return isNumber(val) && (val % 1) === 0
}