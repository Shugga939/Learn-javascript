function ucFirst(str) {
  if (!str) return str
  return str[0].toUpperCase() + str.slice(1)
}

//----
function checkSpam(str) {
  let lowerStr = str.toLowerCase()
  return lowerStr.includes('viagra') || lowerStr.includes('xxx')
}

//-----
function truncate(str, maxlength) {
  if (str.length < maxlength) return str
  return str.slice(0, maxlength - 1) + '…'
}

//-------
function extractCurrencyValue(str) {
  return +str.slice(1)
}