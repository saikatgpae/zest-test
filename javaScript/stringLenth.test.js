const stringLength = require('./stringLenth');

test('Return String Lenth', () => {
  expect(stringLength('string')).toBe(6);
});

test('Null String Lenth', () => {
  expect(stringLength('')).not.toBeLessThan(0);
});

test('More than 10 chrecter', () => {
  expect(stringLength('stringstring')).not.toBeGreaterThan(10);
});
