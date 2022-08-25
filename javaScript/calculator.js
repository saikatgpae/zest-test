class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add(a, b) {
    if (typeof (this.a) !== 'number' || typeof (this.b) !== 'number') {
      throw new Error('Please enter numbers only');
    }
    return a + b;
  }

  subtsract(a, b) {
    if (typeof (this.a) !== 'number' || typeof (this.b) !== 'number') {
      throw new Error('Please enter numbers only');
    }
    return a - b;
  }

  divide(a, b) {
    if (typeof (this.a) !== 'number' || typeof (this.b) !== 'number') {
      throw new Error('Please enter numbers only');
    }
    return a / b;
  }

  multiply(a, b) {
    if (typeof (this.a) !== 'number' || typeof (this.b) !== 'number') {
      throw new Error('Please enter numbers only');
    }
    return a * b;
  }
}

const calculator = new Calculator();

module.exports = calculator;
