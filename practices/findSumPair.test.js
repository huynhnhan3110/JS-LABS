import { findSumPair } from './findSumPair';
describe('findSumPair', () => {
  test('should return [] when input doesnt has an array', () => {
    expect(findSumPair({})).toEqual([]);
    expect(findSumPair([], 0)).toEqual([]);
    expect(findSumPair([], 11)).toEqual([]);
  });

  test('should be return [] when doesnt find 2 number satisfy the need ', () => {
    expect(findSumPair([1, 2], 2)).toEqual([]);
    expect(findSumPair([1, 2], 4)).toEqual([]);
  });

  test('should be return 2 numbers when satisfy the need', () => {
    expect(findSumPair([1, 2, 3, 4], 7)).toEqual([3, 4]);
    expect(findSumPair([1, 2, 3, 3], 6)).toEqual([3, 3]);
    expect(findSumPair([4, 2, 1, 3], 6)).toEqual([2, 4]);
  });
});
