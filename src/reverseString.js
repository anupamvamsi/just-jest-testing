function reverseString(string) {
  let newString;

  if (string === '' || string === null) {
    return string;
  } else if (string) {
    newString = string.split('').reverse().join('');
  }

  return newString;
}

module.exports = { reverseString };
