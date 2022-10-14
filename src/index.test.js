import { capitalizer, helloer } from './index';

test('helloeing', () => {
  expect(helloer()).toBe('hello');
});

test('Capitalize "hello"', () => {
  expect(capitalizer('hello')).toBe('Hello');
});

test('Capitalize "h"', () => {
  expect(capitalizer('h')).toBe('H');
});

test('Capitalize ""', () => {
  expect(capitalizer('')).toBe('');
});

test('Capitalize "undefined"', () => {
  expect(capitalizer(undefined)).toBe(undefined);
});

test('Capitalize "null"', () => {
  expect(capitalizer(null)).toBe(null);
});
