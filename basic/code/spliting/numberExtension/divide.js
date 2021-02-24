import decimal from "./decimal";

export default function divide(num1, num2) {
  const dec = decimal(num2) - decimal(num1)

  const count = num1 / num2
  return parseFloat(count.toFixed(dec))
}