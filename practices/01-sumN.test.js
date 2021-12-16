import { sumNV1, sumNV2, sumNV3, sumNV4 } from './01-sumN';
// S(n) => 1 + 2 +....+n;
// n <= 0 : 0
// n > 0 : sum
describe('s(n)=1+2+...+n', () => {
  test('should return 0 when n <= 0', () => {
    expect(sumNV1(0)).toBe(0);
    expect(sumNV1(-9)).toBe(0);
  });

  test('should return sum when n > 0', () => {
    expect(sumNV1(1)).toBe(1);
    expect(sumNV1(2)).toBe(3);
    expect(sumNV1(5)).toBe(15);
    expect(sumNV1(4)).toBe(10);
  });
});
describe('s(n)=1+2+...+n', () => {
  test('should return 0 when n <= 0', () => {
    expect(sumNV2(0)).toBe(0);
    expect(sumNV2(-9)).toBe(0);
  });

  test('should return sum when n > 0', () => {
    expect(sumNV2(1)).toBe(1);
    expect(sumNV2(2)).toBe(3);
    expect(sumNV2(5)).toBe(15);
    expect(sumNV2(4)).toBe(10);
  });
});
describe('s(n)=1+2+...+n', () => {
  test('should return 0 when n <= 0', () => {
    expect(sumNV3(0)).toBe(0);
    expect(sumNV3(-9)).toBe(0);
  });

  test('should return sum when n > 0', () => {
    expect(sumNV3(1)).toBe(1);
    expect(sumNV3(2)).toBe(3);
    expect(sumNV3(5)).toBe(15);
    expect(sumNV3(4)).toBe(10);
  });
});
describe('s(n)=1+2+...+n', () => {
  test('should return 0 when n <= 0', () => {
    expect(sumNV4(0)).toBe(0);
    expect(sumNV4(-9)).toBe(0);
  });

  test('should return sum when n > 0', () => {
    expect(sumNV4(1)).toBe(1);
    expect(sumNV4(2)).toBe(3);
    expect(sumNV4(5)).toBe(15);
    expect(sumNV4(4)).toBe(10);
  });
});
