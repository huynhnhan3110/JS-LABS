import { findFirstDuplicate } from './findFirstDupplicate';
describe('findFirstDupplicate', () => {
  test('should return -1 when no element repeat or not an array, empty array', () => {
    expect(findFirstDuplicate([1, 2, 3])).toBe(-1);
    expect(findFirstDuplicate(12)).toBe(-1);
    expect(findFirstDuplicate([])).toBe(-1);
  });

  test('should return element repeat at once', () => {
    expect(findFirstDuplicate([1, 1, 2])).toBe(1);
    expect(findFirstDuplicate([1, 2, 2, 1])).toBe(2);
  });
});
