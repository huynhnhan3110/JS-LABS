import { mostFrequent } from './mostFrequent';
describe('mostFrequent', () => {
  test('should be return undefined when has not an array', () => {
    expect(mostFrequent('')).toBe(undefined);
    expect(mostFrequent(12)).toBe(undefined);
    expect(mostFrequent({})).toBe(undefined);
  });

  test('should be return undefined when has an empty array', () => {
    expect(mostFrequent([])).toBe(undefined);
  });

  test('should be return number mostFrequent in array', () => {
    expect(mostFrequent([4, 4, 4, 4, 2, 3, 2, 2, 3, 3, 4, 5, 9, 9, 9, 9])).toBe(4);
    expect(mostFrequent([2, 3, 2, 2, 3, 3, 4, 5])).toBe(2);
  });
});
