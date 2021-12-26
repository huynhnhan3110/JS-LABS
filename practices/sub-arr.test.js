// subarr
import { subArrayEvenNumber } from './sub-arr';
describe('subArrayEvenNumber', () => {
  test('should return empty array when input has not an array', () => {
    expect(subArrayEvenNumber({})).toEqual([]);
    expect(subArrayEvenNumber('')).toEqual([]);
    expect(subArrayEvenNumber('asfdasd')).toEqual([]);
    expect(subArrayEvenNumber(123)).toEqual([]);
    expect(subArrayEvenNumber()).toEqual([]);
  });

  test('should return empty array when array not has an even number', () => {
    expect(subArrayEvenNumber([1, 3, 5, 7, 9])).toEqual([]);
    expect(subArrayEvenNumber([13, 15, 129])).toEqual([]);
  });

  test('should return sub array contains even number when input has at least one even number', () => {
    expect(subArrayEvenNumber([1, 2, 3, 4, 5, 6, 7])).toEqual([[2], [4], [6]]);
    expect(subArrayEvenNumber([3, 4, 6, 5, 8, 12, 14])).toEqual([
      [4, 6],
      [8, 12, 14],
    ]);
  });
});
