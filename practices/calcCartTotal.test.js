import { calcCartTotal } from './calcCartTotal';
describe('calcCartTotal', () => {
  test('should be return 0 when empty array or not an array', () => {
    expect(calcCartTotal([])).toBe(0);
    expect(calcCartTotal()).toBe(0);
    expect(calcCartTotal(12)).toBe(0);
  });

  test('should return total cart ', () => {
    expect(
      calcCartTotal([
        {
          id: 1,
          product: { id: 1, price: 100000 },
          quantity: 4,
        },
        {
          id: 2,
          product: { id: 2, price: 50000 },
          quantity: 2,
        },
      ])
    ).toBe(500000);
  });
});
