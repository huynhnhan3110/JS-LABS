import { chunkArray } from './chunkArray';
describe('chunkArray', () => {
  test('should be return [] when empty array or not an array', () => {
    expect(chunkArray([], 9)).toEqual([]);
    expect(chunkArray(323)).toEqual([]);
    expect(chunkArray([3, 4, 5], 0)).toEqual([]);
    expect(chunkArray([3, 4, 5], -3)).toEqual([]);
  });

  test('should return [] when valid argument', () => {
    expect(chunkArray([1, 2, 3], 2)).toEqual([[1, 2], [3]]);
    expect(chunkArray([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
    expect(chunkArray([1, 2, 3], 3)).toEqual([[1, 2, 3]]);
  });
});
