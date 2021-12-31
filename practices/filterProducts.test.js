import { filterProducts } from './filterProducts';
describe('filterProducts', () => {
  test('should be return [] when empty array or not an array', () => {
    expect(filterProducts([])).toEqual([]);
    expect(filterProducts()).toEqual([]);
    expect(filterProducts(12)).toEqual([]);
  });

  test('should return [] when no product having price > 100000', () => {
    expect(
      filterProducts([
        { id: 1, price: 10000 },
        { id: 2, price: 50000 },
        { id: 3, price: 70000 },
      ])
    ).toEqual([]);
  });
  test('should return a list of products having price > 100000', () => {
    expect(
      filterProducts([
        { id: 1, price: 100000 },
        { id: 2, price: 150000 },
        { id: 3, price: 270000 },
      ])
    ).toEqual([
      { id: 2, price: 150000 },
      { id: 3, price: 270000 },
    ]);
  });
});
