import { isIncreasingNumberV1, isIncreasingNumberV2 } from './06-main';
// increasing number
describe('isIncreasingNumberV1(n)', () => {
  test('should be return false when n < 10', () => {
    Array.from({ length: 10 }, (_, k) => k).forEach((num) => {
      expect(isIncreasingNumberV1(num)).toBe(false);
    });
  });
  test('should be return false when number is not an increasing number', () => {
    [11, 22, 33, 333, 4444, 21, 99, 8888, 121, 55, 51, 75, 31, 1212].forEach((num) => {
      expect(isIncreasingNumberV1(num)).toBe(false);
    });
  });

  test('should be return true when number is an increasing number', () => {
    [12, 123, 12345, 6789, 234].forEach((num) => expect(isIncreasingNumberV1(num)).toBe(true));
  });
});
describe('isIncreasingNumberV2(n)', () => {
  test('should be return false when n < 10', () => {
    Array.from({ length: 10 }, (_, k) => k).forEach((num) => {
      expect(isIncreasingNumberV2(num)).toBe(false);
    });
  });
  test('should be return false when number is not an increasing number', () => {
    [11, 22, 33, 333, 4444, 21, 99, 8888, 121, 55, 51, 75, 31, 1212].forEach((num) => {
      expect(isIncreasingNumberV2(num)).toBe(false);
    });
  });

  test('should be return true when number is an increasing number', () => {
    [12, 123, 12345, 6789, 234].forEach((num) => expect(isIncreasingNumberV2(num)).toBe(true));
  });
});
