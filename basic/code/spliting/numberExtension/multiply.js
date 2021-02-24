import decimal from "./decimal";

export default function multiply(num1, num2) {
  const dec = decimal(num1).length + decimal(num2).length

  const count = num1 * num2
  return parseFloat(count.toFixed(dec))
}