import { shuffle, makeColor } from './functions';

describe('Functions', () => {
  test('shuffle', () => {
    expect(shuffle([])).toBeTruthy();
    expect(shuffle(['q', 'w'])).toBeTruthy();
  });
  test('makeColor', () => {
    expect(makeColor(Number)).toBeTruthy();
    expect(makeColor(5)).toBeTruthy();
  });
});
