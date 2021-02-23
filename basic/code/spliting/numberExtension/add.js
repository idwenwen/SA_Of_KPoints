import decimal from "./decimal";
import max from "./max";

export default function add(num1, num2) {
  // 确定小数点后的位数
  const len = max(decimal(num1).length, decimal(num2).length)

  const count = num1 + num2
  return parseFloat(count.toFixed(len))
}