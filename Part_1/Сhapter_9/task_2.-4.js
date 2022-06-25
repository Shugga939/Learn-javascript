// нет конструктора родительского класса
class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

///-------
class ExtendedClock extends Clock {
  constructor(options) {
    super(options);
    let { precision=1000 } = options
    this.precision = precision
  }

  start() {
    this.render()
    this.timer = setInterval(() => this.render(), this.precision)
  }
}



//------- task_3
// Использовать конструктор родительского класса при наследовании от Object


//------- task_4
// Потому что свойство __proto__ функции А ссылается на прототип функции В