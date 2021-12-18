import { isIncreasingNumber } from './num-07';
describe('isIncreasingNumber(n)', () => {
  test('should be return false when n < 10', () => {
    Array.from({ length: 10 }, (k, v) => v).forEach((num) =>
      expect(isIncreasingNumber(num)).toBe(false)
    );
  });

  test('should be return false when n is not an inscreasing number', () => {
    [10, 11, 22, 33, 1212, 9494, 243, 431, 3343, 934939].forEach((num) =>
      expect(isIncreasingNumber(num)).toBe(false)
    );
  });
  test('should be return true when n is an increasing number', () => {
    [234, 12345, 19, 689].forEach((num) => expect(isIncreasingNumber(num)).toBe(true));
  });
});
