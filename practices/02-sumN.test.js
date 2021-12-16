import { sumNV1, sumNV2, sumNV3 } from './02-sumN';
// Tính S(n) = 1^2 + 2^2 + … + n^2
// n <= 0 : 0
// n > 0 : sum
// n = 1 : 1 ^ 2 --> 1
describe('s(n) = 1^2 +....n^2', () => {
  test('should return 0 when n <= 0', () => {
    expect(sumNV1(0)).toBe(0);
    expect(sumNV1(-1)).toBe(0);
  });

  test('should return sum when n > 0', () => {
    expect(sumNV1(5)).toBe(55); // 1^2 + 2^2 + 3^2 + 4^2 + 5^2 = 1 + 4 + 9 + 16 + 25 = 55
    expect(sumNV1(3)).toBe(14);
    expect(sumNV1(2)).toBe(5);
  });
});
describe('s(n) = 1^2 +....n^2', () => {
  test('should return 0 when n <= 0', () => {
    expect(sumNV2(0)).toBe(0);
    expect(sumNV2(-1)).toBe(0);
  });

  test('should return sum when n > 0', () => {
    expect(sumNV2(5)).toBe(55); // 1^2 + 2^2 + 3^2 + 4^2 + 5^2 = 1 + 4 + 9 + 16 + 25 = 55
    expect(sumNV2(3)).toBe(14);
    expect(sumNV2(2)).toBe(5);
  });
});
describe('s(n) = 1^2 +....n^2', () => {
  test('should return 0 when n <= 0', () => {
    expect(sumNV3(0)).toBe(0);
    expect(sumNV3(-1)).toBe(0);
  });

  test('should return sum when n > 0', () => {
    expect(sumNV3(5)).toBe(55); // 1^2 + 2^2 + 3^2 + 4^2 + 5^2 = 1 + 4 + 9 + 16 + 25 = 55
    expect(sumNV3(3)).toBe(14);
    expect(sumNV3(2)).toBe(5);
  });
});
