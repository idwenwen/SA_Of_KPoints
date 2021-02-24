import each from "../arrayExtension/each"

export default function hump(str) {
  const matches = str.match(/(\_|\s)[a-z]/g)
  each(matches, (val) => {
    str.replace(val, val.toUpperCase())
  })
  return str
}