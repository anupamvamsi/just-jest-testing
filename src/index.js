function helloer() {
  return 'hello';
}

function capitalize(string) {
  let newString;

  if (string === '' || string === null) {
    newString = string;
  } else if (string) {
    newString = string[0].toUpperCase() + string.slice(1, string.length);
  }
  return newString;
}

module.exports = { helloer, capitalize };
