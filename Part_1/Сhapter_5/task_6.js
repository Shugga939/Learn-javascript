function unique(arr) {
  return [...new Set(arr)]
}

//-------
function aclean(arr) {
  let map = new Map()

  arr.forEach((el)=> {
    let sorted = el.toLowerCase().split("").sort().join("")
      map.set(sorted, el)
  })

  return [...map.values()]
}


//----
let map = new Map()
map.set("name", "John")
let keys = [...map.keys()]
keys.push("more")

