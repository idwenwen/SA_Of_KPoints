/**
 * 数据转换称为科学计数法的方式。
 */
export default function toEpsilon(val, decimal = 6) {
  return val.toExponential(decimal)
}