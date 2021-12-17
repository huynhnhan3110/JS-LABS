import { sumV1, sumV2, sumV3 } from './04-main';
// ½ + ¼ + … + 1/2n
describe('hamV1', () => {
  test('should return 0 when n<=0', () => {
    expect(sumV1(-1)).toBe(0);
    expect(sumV1(0)).toBe(0);
  });

  test('should return sum when n > 0', () => {
    expect(sumV1(1)).toBe(0.5);
    expect(sumV1(2)).toBe(0.75);
    expect(sumV1(3)).toBeCloseTo(0.916);
  });
});

describe('hamV2', () => {
  test('should return 0 when n<=0', () => {
    expect(sumV2(-1)).toBe(0);
    expect(sumV2(0)).toBe(0);
  });

  test('should return sum when n > 0', () => {
    expect(sumV2(1)).toBe(0.5);
    expect(sumV2(2)).toBe(0.75);
    expect(sumV2(3)).toBeCloseTo(0.916);
  });
});
describe('hamV3', () => {
  test('should return 0 when n<=0', () => {
    expect(sumV3(-1)).toBe(0);
    expect(sumV3(0)).toBe(0);
  });

  test('should return sum when n > 0', () => {
    expect(sumV3(1)).toBe(0.5);
    expect(sumV3(2)).toBe(0.75);
    expect(sumV3(3)).toBeCloseTo(0.916);
  });
});
