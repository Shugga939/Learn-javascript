let num1 = +prompt ('Введите число', '')
let num2 = +prompt ('Введите число', '')

alert (num1+num2)

//----
Math.round(6.35 * 10) / 10

//-----

function readNumber() {
  let num;

  do {
    num = prompt("Введите число", 0);
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
}

//-----
// i не будет равно 10 из за потери точности

//-----

function random(min, max) {
  return min+Math.random()*(max-min)
}

//----
function randomInteger(min, max) {
  let random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}