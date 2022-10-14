import { helloer } from './index';

test('helloeing', () => {
  expect(helloer()).toBe('hello');
});
