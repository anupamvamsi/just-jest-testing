import { analyzeArray } from './analyzeArray';

test('Base test', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('All equal', () => {
  expect(analyzeArray([1, 1, 1, 1, 1])).toStrictEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 5,
  });
});
