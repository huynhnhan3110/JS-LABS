import { uniqueLetters } from './removeDuplicateNum';
describe('uniqueLetters', () => {
  test('should be return empty string when has no input', () => {
    expect(uniqueLetters('')).toBe('');
  });

  test('should be return unique letters when has input', () => {
    expect(uniqueLetters('abc')).toBe('abc');
    expect(uniqueLetters('easy frontend')).toBe('asy frotd');
    expect(uniqueLetters('aabccddeff')).toBe('be');
  });
});
