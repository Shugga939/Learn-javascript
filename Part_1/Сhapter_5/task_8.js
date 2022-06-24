function sumSalaries(obj) {

  let sum = 0
  for (const el of Object.values(obj)) {
    sum+= el
  }
}

//------
function count(obj) {
  return Object.keys(obj).length
}