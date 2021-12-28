import { isStrongPassword } from './isStrongPassword';
describe('isStrongPassword', () => {
  test('should be return false when nothing input', () => {
    expect(isStrongPassword('')).toBe(false);
  });

  test('should be return false when not expect all condition', () => {
    expect(isStrongPassword('super strong')).toBe(false);
    expect(isStrongPassword('123123123')).toBe(false);
  });
  test('should be return true when match all condition', () => {
    expect(isStrongPassword('Super3C0!')).toBe(true);
  });
});
