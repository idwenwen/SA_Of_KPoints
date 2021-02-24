export default function titleCase(str) {
  const char = str[0]
  return str.replace(char, char.toUpperCase())
}