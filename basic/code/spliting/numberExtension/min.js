import flatten from "../arrayExtension/flatten";
import isArray from "../typeDiscrimination/isArray";

export default function min(...vals) {
  let minNum = null
  if (isArray(vals[0])) {
    vals = flatten(vals)
  }

  for (const item of vals) {
    if (!minNum) minNum = item
    else if (minNum > item) {
      minNum = item
    }
  }

  return minNum
}