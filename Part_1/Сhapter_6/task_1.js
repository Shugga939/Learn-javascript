function sumTo(n) {
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum += i
  }
  return sum
}

function sumTo(n) {
  if (n == 1) return 1
  return n + sumTo(n - 1)
}

function sumTo(n) {
  return n * (n + 1) / 2
}

//----------
function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1
}

//--------
function fib(n) {
  let a = 1
  let b = 1
  for (let i = 3; i <= n; i++) {
    let c = a + b
    a = b
    b = c
  }
  return b
}

//----------
function printList(list) {
  let tmp = list;

  while (tmp) {
    alert(tmp.value)
    tmp = tmp.next
  }
}

//-------
function printList(list) {

  alert(list.value)

  if (list.next) printList(list.next)
}

//-----------
function printReverseList(list) {
  if (list.next) printReverseList(list.next)
  alert(list.value);
}

function printReverseList(list) {
  let arr = []
  let tmp = list

  while (tmp) {
    arr.push(tmp.value)
    tmp = tmp.next
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    alert( arr[i] )
  }
}