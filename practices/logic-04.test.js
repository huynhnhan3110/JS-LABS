import { findMostFrequentNumber } from './logic-04';
describe('findMostFrequentNumber', () => {
  test('should return undefined when input is not an array', () => {
    expect(findMostFrequentNumber({})).toBe(undefined);
    expect(findMostFrequentNumber('')).toBe(undefined);
    expect(findMostFrequentNumber(123)).toBe(undefined);
  });
  test('should be return number most frequent in the array', () => {
    expect(findMostFrequentNumber([2, 3, 2])).toBe(2);
    expect(findMostFrequentNumber([2, 3])).toBe(2);
    expect(findMostFrequentNumber([1, 2, 2, 1, 1, 1])).toBe(1);
  });
});
