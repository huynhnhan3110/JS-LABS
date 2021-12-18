import { statisticsWords } from './string-08';
describe('statisticsWords(str)', () => {
  test('should return empty when nothing arguments', () => {
    expect(statisticsWords('')).toEqual({});
  });

  test('should return correct statistics when str has a redudant spaces', () => {
    expect(statisticsWords('easy    frontend    easy')).toEqual({
      easy: 2,
      frontend: 1,
    });
  });

  test("should return correct statistics when str doesn't a redudant spaces", () => {
    expect(statisticsWords('easy frontend easy')).toEqual({
      easy: 2,
      frontend: 1,
    });
  });
});
