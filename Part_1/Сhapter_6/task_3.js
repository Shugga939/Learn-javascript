function makeCounter() {
  let count = 0

  function counter() {
    return count++
  }

  counter.set = value => count = value
  counter.decrease = () => count--

  return counter
}


//-------

function sum(a) {

  let sum = a

  function returned (b) {
    sum+=b
    return returned
  }

  returned.toString = ()=> sum

  return returned
}