import { calculator } from './calculator';

// ADDITION
test('Sum of two +ve numbers', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('Sum of two -ve numbers', () => {
  expect(calculator.add(-1, -2)).toBe(-3);
});

test('Sum of -ve and +ve numbers', () => {
  expect(calculator.add(-20, 12)).toBe(-8);
});

test('Sum of null and a number', () => {
  expect(calculator.add(null, 14)).toBe(14);
});

test('Sum of two nulls', () => {
  expect(calculator.add(null, null)).toBe(0);
});

test('Sum of undefined and a number', () => {
  expect(calculator.add(undefined, 2)).toBe(NaN);
});

test('Sum of a string and a number', () => {
  expect(calculator.add('23', 16)).toBe(39);
});

// SUBTRACTION
test('Difference of two +ve numbers', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test('Difference of two -ve numbers', () => {
  expect(calculator.subtract(-1, -2)).toBe(1);
});

test('Difference of -ve and +ve numbers', () => {
  expect(calculator.subtract(-20, 12)).toBe(-32);
});

test('Difference of null and a number', () => {
  expect(calculator.subtract(null, 14)).toBe(-14);
});

test('Difference of two nulls', () => {
  expect(calculator.subtract(null, null)).toBe(0);
});

test('Difference of undefined and a number', () => {
  expect(calculator.subtract(undefined, 2)).toBe(NaN);
});

test('Difference of a string and a number', () => {
  expect(calculator.subtract('23', 16)).toBe(7);
});
