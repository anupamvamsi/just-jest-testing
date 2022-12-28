import { capitalize, helloer } from './index';

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
