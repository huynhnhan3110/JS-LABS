import { countWords } from './countWord';
describe('countWords', () => {
  test('should be return zero when has empty string', () => {
    expect(countWords('')).toBe(0);
  });

  test('should be return number of word in string', () => {
    expect(countWords('easy')).toBe(1);
    expect(countWords('easy frontend')).toBe(2);
    expect(countWords('       easy     frontend      ')).toBe(2);
  });
});
