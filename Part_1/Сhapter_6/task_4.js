function printNumbers(from, to) {
  let count = from
  let timerId = setInterval(()=>{
    alert(count)
    if (count==to) clearInterval(timerId)
    count++
  } ,1000)
}

function printNumbers(from, to) {
  let count = from;

  setTimeout(function go() {
    alert(count);
    if (count < to) {
      setTimeout(go, 1000);
    }
    count++;
  }, 1000);
}


//------
// i == 100000000 , т.к. timeout выполняется в последнюю очередь в event loop