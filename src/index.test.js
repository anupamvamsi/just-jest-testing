import { capitalize, helloer, reverseString } from './index';

test('helloeing', () => {
  expect(helloer()).toBe('hello');
});

// Capitalize
test('Capitalize "hello"', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('Capitalize "h"', () => {
  expect(capitalize('h')).toBe('H');
});

test('Capitalize ""', () => {
  expect(capitalize('')).toBe('');
});

test('Capitalize "undefined"', () => {
  expect(capitalize(undefined)).toBe(undefined);
});

test('Capitalize "null"', () => {
  expect(capitalize(null)).toBe(null);
});

// reverseString
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
