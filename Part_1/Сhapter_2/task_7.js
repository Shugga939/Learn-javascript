if ("0") {
  alert( 'Привет' );  // выведется
}

//------
let val = prompt('Какое "официальное" название JavaScript?', '')

if (val == 'ECMAScript') {
  alert('Верно!')
} else {
  alert('Не знаете? ECMAScript!')
}

//------
let val1 = prompt('Введите число', '')
 
if (+val1 > 0) {
  alert(1)
} else if(+val1==0) {
  alert(0) 
} else {
  alert(-1) 
}

//----
let result;
result = (a + b < 4) ? 'Мало': 'Много'


//----

let message = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';