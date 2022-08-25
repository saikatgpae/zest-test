const stringLength = (string) => {
  if (string.length < 1 && string.lenght > 10) {
    throw new Error('Please enter a string of 1-10 chracter...');
  }
  return string.length;
};

module.exports = stringLength;
