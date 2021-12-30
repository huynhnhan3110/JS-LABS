import { mergeArray } from './mergeArray';

describe('mergeArray', () => {
  test('should be return empty array when no input argument', () => {
    expect(mergeArray([], [])).toEqual([]);
    expect(mergeArray(1, true)).toEqual([]);
  });

  test('should be return array merge from input', () => {
    expect(mergeArray([], [12, 3])).toEqual([12, 3]);
    expect(mergeArray([12], [12, 3])).toEqual([12, 3]);
    expect(mergeArray([1, 2, 3, 4], [3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
