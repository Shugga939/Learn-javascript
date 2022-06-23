// Ошибка, пропущена ;

//----
// 1. Ссылка на объект 2. То же  3. Запись функции в переменную 4. То же

// Ошибка

//////----
let calculator = {
  sum() {
    return this.a + this.b
  },

  mul() {
    return this.a * this.b
  },

  read() {
    this.a = +prompt('a?', 0)
    this.b = +prompt('b?', 0)
  }
};

calculator.read();
alert( calculator.sum() )
alert( calculator.mul() )

///-----
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this;
  }
}