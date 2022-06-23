let i = 3;

while (i) {
  alert( i-- );
}   // 0

//-----
let i = 0;
while (++i < 5) alert( i ); // 4
while (i++ < 5) alert( i ); // 5

//-----
for (let i = 0; i < 5; i++) alert( i ); //4
for (let i = 0; i < 5; ++i) alert( i ); //4

//-----
for (let i = 0; i < 11; ++i) {
  if (i%2==0) alert( i )
}

//-----
let i = 0;
while(i < 3) {
  alert( `number ${i}!` )
  i++
} 

//-----
let num;

do {
  num = prompt("Введите число больше 100?", 0)
} while (num <= 100 && num)

//-----

let n = 10

nextPrime:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime
  }

  alert( i )
}