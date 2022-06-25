function spy (func) {
  function wrapper (...args) {
   wrapper.calls.push(args)
   return func.call(this, ...args)
 }
 wrapper.calls = []
 return wrapper
}


//----------
function delay (func, time) {

  return function() {
    setTimeout(() => func.apply(this, arguments), time)
  }
}

//--------

function debounce(func, time) {
  let running = false

  return function () {
    if (!running) {
      running = true
      setTimeout(() => running = false, time)
      return func.apply(this, arguments)
    } else {
      return
    }
  }
}

//---------

function throttle (func, time) {

  let isThrottled = false,
  savedArgs,
  savedThis;

  function wrapper() {

    if (isThrottled) { 
      savedArgs = arguments
      savedThis = this
      return
    }

    func.apply(this, arguments)
    isThrottled = true

    setTimeout(function() {
      isThrottled = false
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs)
        savedArgs = savedThis = null
      }
    }, time);
  }

  return wrapper
}