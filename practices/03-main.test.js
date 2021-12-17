import { sumSrtV1, sumSrtV2, sumSrtV3 } from './03-main';
// Tính S(n) = 1 + ½ + 1/3 + … + 1/n
// s(3) = 1/1+ 1/2 + 1/3
// s(1) = 1
// s(0) = 0
describe('hamV1', () => {
  test('should return 0 when n <= 0', () => {
    expect(sumSrtV1(0)).toBe(0);
    expect(sumSrtV1(-2)).toBe(0);
  });

  test('should return sum when n > 0', () => {
    expect(sumSrtV1(1)).toBe(1);
    expect(sumSrtV1(2)).toBe(1.5);
    expect(sumSrtV1(3)).toBeCloseTo(1.83);
  });
});
describe('hamV2', () => {
  test('should return 0 when n <= 0', () => {
    expect(sumSrtV2(0)).toBe(0);
    expect(sumSrtV2(-2)).toBe(0);
  });

  test('should return sum when n > 0', () => {
    expect(sumSrtV2(1)).toBe(1);
    expect(sumSrtV2(2)).toBe(1.5);
    expect(sumSrtV2(3)).toBeCloseTo(1.83);
  });
});
describe('hamV3', () => {
  test('should return 0 when n <= 0', () => {
    expect(sumSrtV3(0)).toBe(0);
    expect(sumSrtV3(-2)).toBe(0);
  });

  test('should return sum when n > 0', () => {
    expect(sumSrtV3(1)).toBe(1);
    expect(sumSrtV3(2)).toBe(1.5);
    expect(sumSrtV3(3)).toBeCloseTo(1.83);
  });
});
