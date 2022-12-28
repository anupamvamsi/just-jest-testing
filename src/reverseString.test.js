import { reverseString } from './reverseString';

test('Reverse String "hello"', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('Reverse String "h"', () => {
  expect(reverseString('h')).toBe('h');
});

test('Reverse String ""', () => {
  expect(reverseString('')).toBe('');
});

test('Reverse String <sentence>', () => {
  expect(reverseString('This is a sentence!\n\tC $# -- _ AABA\t')).toBe(
    '\tABAA _ -- #$ C\t\n!ecnetnes a si sihT'
  );
});

test('Reverse String "null"', () => {
  expect(reverseString(null)).toBe(null);
});

test('Reverse String "undefined"', () => {
  expect(reverseString(undefined)).toBe(undefined);
});
