const reverseString = require('./reverseString');

test('Reverse The string', () => {
  expect(reverseString('hello')).toMatch('olleh');
});