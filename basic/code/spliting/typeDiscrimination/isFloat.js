export default function isFloat(val) {
  return isNumber(val) && (val % 1) > 0
}