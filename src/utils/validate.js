export function trim (str) {
  // 去掉空格
  str = str.toString()
  return str.replace(/^\s+|\s+$/g, '')
}
