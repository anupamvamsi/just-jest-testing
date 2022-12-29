const alphabets = 'abcdefghijklmnopqrstuvwxyz';

// alphabets array: (alphabets.split(''))
const alphArray = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

export function caesarCipher(string, shift) {
  let rawText = string.toLowerCase().split('');

  const encryptedArray = [];

  rawText.forEach((letter) => {
    if (letter.match(/[.,:!?\-_&%$#@^ \n]/)) {
      encryptedArray.push(letter);
    } else {
      let foundLetterIdx = alphArray.indexOf(letter);
      let newLetterIdx =
        shift >= 0 ? foundLetterIdx + shift : foundLetterIdx - shift;

      newLetterIdx = newLetterIdx % 26;

      encryptedArray.push(alphArray[newLetterIdx]);
    }
  });

  const encrypted = encryptedArray.join('');

  return encrypted;
}
