const calculator = require('./calculator');

describe('Add', () => {
  test('Add 2 numbers', () => {
    expect(calculator.add(3, 4)).toBe(7);
  });

  test('Returns NAN', () => {
    expect(calculator.add()).toBe('Please enter numbers only');
  });

  test('String can not be added', () => {
    expect(calculator.add('string', 'string')).toBe('Please enter numbers only');
  });
});

describe('Substract', () => {
  test('Substract two numbers', () => {
    expect(calculator.subtsract(5, 2)).toBe(3);
  });

  test('Returns NAN', () => {
    expect(calculator.subtsract()).toBe('Please enter numbers only');
  });

  test('String can not be added', () => {
    expect(calculator.subtsract('string', 'string')).toBe('Please enter numbers only');
  });
});

describe('Divide', () => {
  test('Divide two numbers', () => {
    expect(calculator.multiply(6, 2)).toBe(12);
  });

  test('Returns NAN', () => {
    expect(calculator.multiply()).toBe('Please enter numbers only');
  });

  test('String can not be multiply', () => {
    expect(calculator.multiply('string', 'string')).toBe('Please enter numbers only');
  });
});

describe('Multiply', () => {
  test('Multiply two numbers', () => {
    expect(calculator.divide(6, 2)).toBe(3);
  });

  test('Returns NAN', () => {
    expect(calculator.divide()).toBe('Please enter numbers only');
  });

  test('String can not be Divide', () => {
    expect(calculator.divide('string', 'string')).toBe('Please enter numbers only');
  });
});