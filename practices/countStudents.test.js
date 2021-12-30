import { countStudents } from './countStudents';
describe('countStudents', () => {
  test('should be return 0 when input has an empty array or not an array', () => {
    expect(countStudents('as')).toBe(0);
    expect(countStudents([])).toBe(0);
    expect(countStudents(123)).toBe(0);
  });

  test('should be return 0 when no student has male gender', () => {
    expect(
      countStudents([
        { id: 1, gender: 'female' },
        { id: 2, gender: 'female' },
      ])
    ).toBe(0);
  });

  test('should be return number of male gender in array', () => {
    expect(
      countStudents([
        { id: 1, gender: 'male' },
        { id: 2, gender: 'female' },
      ])
    ).toBe(1);
  });
});
