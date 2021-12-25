import {countUniqueNumber} from './07-main';

describe('countUniqueNumber', () => {
    test('shoud return 0 when not an array', () => {
        expect(countUniqueNumber({})).toBe(0);
        expect(countUniqueNumber(0)).toBe(0);
        expect(countUniqueNumber(-1)).toBe(0);
        expect(countUniqueNumber(null)).toBe(0);
    })
    test('shoud return length of array when has a unique array', () => {
        expect(countUniqueNumber([1])).toBe(1);
        expect(countUniqueNumber([9,4])).toBe(2);
        expect(countUniqueNumber([2,3,4])).toBe(3);
        expect(countUniqueNumber([1,2,3,4])).toBe(4);
    })
    test('shoud return count unique number of array when has a unique array', () => {
        expect(countUniqueNumber([1,1])).toBe(1);
        expect(countUniqueNumber([9,4,4])).toBe(2);
        expect(countUniqueNumber([2,3,4,3,3,4,2])).toBe(3);
        expect(countUniqueNumber([1,2,3,4,4,3,2,1])).toBe(4);
    })
})