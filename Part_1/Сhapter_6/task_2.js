// Покажет  0 и 1

//---------
// Будет работать. Покажет 1,2,1

//-----------
// Будет ошибка

//-----

function sum(a) {
  return (b)=> a+b
}

//-------

function inBetween(a, b) {
  return function (el) {
    if (el >=a && el <= b) return true
  }
}

function inArray(arr) {
  return function(el) {
    return arr.includes(el);
  }
}

//--------

function byField(fieldName) {
  return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

//--------
// Переменная береться из лексического окружения в котором была создана функция
// Для решения можно создать еще одну переменную и брать оттуда итерируемое значение
