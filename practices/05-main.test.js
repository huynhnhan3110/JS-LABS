//Tính S(n) = 1 + 1/3 + 1/5 + … + 1/(2n + 1)
import { sumV1, sumV2, sumV3 } from './05-main';
// ½ + ¼ + … + 1/2n
describe('hamV1', () => {
  test('should return 0 when n<0', () => {
    expect(sumV1(-1)).toBe(0);
  });

  test('should return sum when n > 0', () => {
    expect(sumV1(0)).toBe(1);
    expect(sumV1(1)).toBeCloseTo(1.33);
    expect(sumV1(2)).toBeCloseTo(1.53);
  });
});
describe('hamV2', () => {
  test('should return 0 when n<0', () => {
    expect(sumV2(-1)).toBe(0);
  });

  test('should return sum when n > 0', () => {
    expect(sumV2(0)).toBe(1);
    expect(sumV2(1)).toBeCloseTo(1.33);
    expect(sumV2(2)).toBeCloseTo(1.53);
  });
});
describe('hamV3', () => {
  test('should return 0 when n<0', () => {
    expect(sumV3(-1)).toBe(0);
  });

  test('should return sum when n > 0', () => {
    expect(sumV3(0)).toBe(1);
    expect(sumV3(1)).toBeCloseTo(1.33);
    expect(sumV3(2)).toBeCloseTo(1.53);
  });
});
