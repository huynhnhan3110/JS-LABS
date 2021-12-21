import { findStudentById } from './array-find-08';
describe('findStudentById(studentList, studentId)', () => {
  test('should be return -1 when studentList is null or undefined', () => {
    expect(findStudentById([], 2)).toBe(-1);
  });

  test('should be return -1 when studentList has not student ', () => {
    expect(
      findStudentById(
        [
          {
            id: 1,
            name: 'Med',
          },
          { id: 2, name: 'Hag' },
        ],
        3
      )
    ).toBe(-1);
  });
  test('should be return index when studentList has student ', () => {
    expect(
      findStudentById(
        [
          {
            id: 1,
            name: 'Med',
          },
          { id: 2, name: 'Hag' },
        ],
        2
      )
    ).toBe(1);
  });
});
