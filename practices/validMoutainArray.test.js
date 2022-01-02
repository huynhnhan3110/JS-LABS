import { validMountainArray } from './validMoutainArray';
describe('validMoutainArray', () => {
  test('should return false when not an array or empty array', () => {
    expect(validMountainArray(2123)).toBe(false);
    expect(validMountainArray([])).toBe(false);
    expect(validMountainArray([1])).toBe(false);
    expect(validMountainArray([1, 3])).toBe(false);
    expect(validMountainArray([0, 1, 2])).toBe(false);
    expect(validMountainArray([3, 5, 5])).toBe(false);
  });

  test('should return true when array is an mountain array', () => {
    expect(validMountainArray([2, 3, 5, 1])).toBe(true);
    expect(validMountainArray([0, 3, 2, 1])).toBe(true);
    expect(validMountainArray([1, 2, 3, 2])).toBe(true);
  });
});
