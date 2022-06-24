alert( fruits.length ); // 4

//----
let styles = ["Джаз", "Блюз"]
styles.push("Рок-н-ролл")
styles[Math.floor((styles.length - 1) / 2)] = "Классика"
alert(styles.shift())
styles.unshift("Рэп", "Регги")

//------
// a,b,function(){...}

//------

function sumInput() {
  let numbers = []

  while (true) {
    let value = prompt("Введите число", 0)
    if (value === "" || value === null || !isFinite(value)) break;
    numbers.push(+value)
  }

  let sum = 0
  numbers.forEach(el => {
    sum += el
  });
  return sum;
}

//---
function getMaxSubSum(arr) {
  let maxSum = 0
  let partialSum = 0

  arr.forEach((el)=> {
    partialSum += el
    maxSum = Math.max(maxSum, partialSum)
    if (partialSum < 0) partialSum = 0
  })
  return maxSum;
}

