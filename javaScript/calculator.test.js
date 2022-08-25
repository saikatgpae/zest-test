const calculator = require('./calculator');

describe('Add', () => {
  test('Add 2 numbers', () => {
    expect(calculator.add(3, 4)).toBe(7);
  });

  test('Returns NAN', () => {
    expect(calculator.add()).toBeNaN();
  });

  test('String can not be added', () => {
    expect(calculator.add('string', 'string')).toThrow(Error);
  });
});

describe('Substract', () => {
  test('Substract two numbers', () => {
    expect(calculator.subtsract(5, 2)).toBe(3);
  });

  test('Returns NAN', () => {
    expect(calculator.subtsract()).toBeNaN();
  });

  test('String can not be added', () => {
    expect(calculator.subtsract('string', 'string')).toThrow(Error);
  });
});

describe('Multiply', () => {
  test('Divide two numbers', () => {
    expect(calculator.divide(6, 2)).toBe(3);
  });

  test('Returns NAN', () => {
    expect(calculator.divide()).toBeNaN();
  });

  test('String can not be Divide', () => {
    expect(calculator.divide('string', 'string')).toThrow(Error);
  });
});

describe('Divide', () => {
  test('Multiply two numbers', () => {
    expect(calculator.multiply(6, 2)).toBe(12);
  });

  test('Returns NAN', () => {
    expect(calculator.multiply()).toBeNaN();
  });

  test('String can not be multiply', () => {
    expect(calculator.multiply('string', 'string')).toThrow(Error);
  });
});