function camelize(str) {
  return str.split('-')
        .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join('')
}

//----

function filterRange(arr, a, b) {
  return arr.filter(item => a <= item && item <= b)
}

//---
function filterRangeInPlace(arr, a, b) {
  
  arr.forEach((el,i )=> {
    if (el < a || el > b) {
      arr.splice(i, 1)
    }
  })
}

//---

let arr = [5, 2, 1, -10, 8];
arr.sort((a,b)=> b-a)
alert( arr )

//-----
function copySorted(arr) {
  return arr.slice().sort()
}

//-----
function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {
    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN
    }

    return this.methods[op](a, b)
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func
  };
}

//-----

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];
let names = users.map(el=> el.name)


//-------

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let newUsers = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

//-----
function sortByAge(arr) {
  arr.sort((a, b) => a.age > b.age ? 1 : -1)
}

//----
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    [array[i], array[j]] = [array[j], array[i]]
  }
}

//-----
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length
}


//-----
function unique(arr) {
  let result = [];

  arr.forEach((el)=> {
    if (!result.includes(el)) result.push(el)
  })

  return result;
}
