import decimal from "./decimal"
import integer from "./integer"

export default function fixed(val, decimalLength, type = fixed.Round) {
  const dec = decimal(val)
  const inte = integer(val)
  if (dec.length <= decimalLength) {
    return val
  } else {
    let leftDec = parseFloat(subStr(dec, decimalLength)),
        carryDet = parseFloat(dec.charAt(decimalLength))
    if ((carryDet >= 5 && type === fixed.Round) || type === fixed.cell) {
      leftDec += 1
    }
    return parseFloat(`${int}.${leftDec}`)
  }
}

fixed.Cell = 'cell'
fixed.Floor = 'floor'
fixed.Round = 'round'