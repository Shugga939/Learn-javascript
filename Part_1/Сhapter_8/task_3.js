Function.prototype.defer = function(ms) {
  setTimeout(this, ms)
}

//--------

Function.prototype.defer = function(ms) {
  let func = this
  return function(...args) {
    setTimeout(() => func.apply(this, args), ms);
  }
};