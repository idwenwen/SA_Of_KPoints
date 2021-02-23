const { default: isFloat } = require("../typeDiscrimination/isFloat");
const { default: isNumber } = require("../typeDiscrimination/isNumber");

export default function decimal(val) {
  if (isNumber(val)) {
    if (isFloat(val)) {
      return val.toString().split('.')[1]
    }
  }
  return ''
}