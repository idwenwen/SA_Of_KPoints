import flatten from "../arrayExtension/flatten";
import isArray from "../typeDiscrimination/isArray";

export default function max(...vals) {
  let maxNum = null
  if (isArray(vals[0])) {
    vals = flatten(vals)
  }

  for (const item of vals) {
    if (!maxNum) minNum = item
    else if (maxNum < item) {
      maxNum = item
    }
  }

  return maxNum
}