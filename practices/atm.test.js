import { withdraw } from './atm';
describe('withdraw', () => {
  test('should be return Insufficient balance from ATM when higher quality ', () => {
    expect(withdraw(8500000)).toBe('Insufficient balance from ATM');
  });

  test('should be return Invalid balance when invalid number input', () => {
    expect(withdraw('12312')).toBe('Invalid balance');
    expect(withdraw()).toBe('Invalid balance');
    expect(withdraw(1233)).toBe('Invalid balance');
    expect(withdraw(125000)).toBe('Invalid balance');
  });

  test('should be  return object when has an valid number ', () => {
    expect(withdraw(200000)).toEqual({
      k500: 0,
      k200: 1,
      k100: 0,
      k50: 0,
    });

    expect(withdraw(850000)).toEqual({
      k500: 1,
      k200: 1,
      k100: 1,
      k50: 1,
    });
  });
});
