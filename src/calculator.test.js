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

// MULTIPLICATION
test('Product of two +ve numbers', () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test('Product of two -ve numbers', () => {
  expect(calculator.multiply(-1, -2)).toBe(2);
});

test('Product of -ve and +ve numbers', () => {
  expect(calculator.multiply(-20, 12)).toBe(-240);
});

test('Product of null and a number', () => {
  expect(calculator.multiply(null, 14)).toBe(0);
});

test('Product of two nulls', () => {
  expect(calculator.multiply(null, null)).toBe(0);
});

test('Product of undefined and a number', () => {
  expect(calculator.multiply(undefined, 2)).toBe(NaN);
});

test('Product of a string and a number', () => {
  expect(calculator.multiply('23', 16)).toBe(368);
});

// DIVISION
test('Remainder of two +ve numbers', () => {
  expect(calculator.divide(1, 2)).toBe(0.5);
});

test('Remainder of two -ve numbers', () => {
  expect(calculator.divide(-1, -2)).toBe(0.5);
});

test('Remainder of -ve and +ve numbers', () => {
  expect(calculator.divide(-20, 12)).toBeCloseTo(-1.67);
});

test('Remainder of null and a number', () => {
  expect(calculator.divide(null, 14)).toBe(0);
});

test('Remainder of two nulls', () => {
  expect(calculator.divide(null, null)).toBe(NaN);
});

test('Remainder of undefined and a number', () => {
  expect(calculator.divide(undefined, 2)).toBe(NaN);
});

test('Remainder of a string and a number', () => {
  expect(calculator.divide('23', 16)).toBeCloseTo(1.4375);
});
