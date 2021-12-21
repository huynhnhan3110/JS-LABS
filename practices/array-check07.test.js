import { hasAlice } from './array-check07';
//
describe('hasAlice', () => {
  test('should return false when array empty or not is an array', () => {
    expect(hasAlice([])).toBe(false);
  });

  test('should be return false when array has not alice with female gender', () => {
    expect(
      hasAlice([
        { name: 'Alice', gender: 'male' },
        { name: 'Bob', gender: 'female' },
      ])
    ).toBe(false);
  });

  test('should be return true when array has Alice and female gender', () => {
    expect(
      hasAlice([
        { name: 'alice', gender: 'female' },
        { name: 'Bob', gender: 'female' },
      ])
    ).toBe(true);
  });
});
