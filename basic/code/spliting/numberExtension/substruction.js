import decimal from "./decimal";
import max from "./max";

export default function subtruction(num1, num2) {
  const len = max(decimal(num1).length, decimal(num2).length)

  const sub = num1 - num2
  return parseFloat(sub.toFixed(len))
}