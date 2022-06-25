// finally гарантирует выполнение кода вне зависимости от выхода из try catch

//------
class FormatError extends SyntaxError {
  constructor(message) {
    super(message)
    this.name = "FormatError"
  }
}