import { classifyStudentV3, classifyStudentV2, classifyStudentV1 } from './05-09-main';
describe('classifyStudentV2', () => {
  test('should return Invalid when 0 > n > 10 ', () => {
    expect(classifyStudentV2(-1)).toBe('Invalid mark!');
    expect(classifyStudentV2(11)).toBe('Invalid mark!');
  });
  test('should return Excellence when n in [9-10]', () => {
    [9, 10].forEach((num) => {
      expect(classifyStudentV2(num)).toBe('Excellence');
    });
  });

  test('should return Excellence when n in [7-8]', () => {
    [7, 8].forEach((num) => {
      expect(classifyStudentV2(num)).toBe('Good');
    });
  });

  test('should return Excellence when n in [4-6]', () => {
    [4, 5, 6].forEach((num) => {
      expect(classifyStudentV2(num)).toBe('Not good');
    });
  });

  test('should return Excellence when n in [1, 2, 3]', () => {
    [1, 2, 3].forEach((num) => {
      expect(classifyStudentV2(num)).toBe('Bad');
    });
  });
});
describe('classifyStudentV1', () => {
  test('should return Invalid when 0 > n > 10 ', () => {
    expect(classifyStudentV1(-1)).toBe('Invalid mark!');
    expect(classifyStudentV1(11)).toBe('Invalid mark!');
  });
  test('should return Excellence when n in [9-10]', () => {
    [9, 10].forEach((num) => {
      expect(classifyStudentV1(num)).toBe('Excellence');
    });
  });

  test('should return Excellence when n in [7-8]', () => {
    [7, 8].forEach((num) => {
      expect(classifyStudentV1(num)).toBe('Good');
    });
  });

  test('should return Excellence when n in [4-6]', () => {
    [4, 5, 6].forEach((num) => {
      expect(classifyStudentV1(num)).toBe('Not good');
    });
  });

  test('should return Excellence when n in [1, 2, 3]', () => {
    [1, 2, 3].forEach((num) => {
      expect(classifyStudentV1(num)).toBe('Bad');
    });
  });
});
describe('classifyStudentV3', () => {
  test('should return Invalid when 0 > n > 10 ', () => {
    expect(classifyStudentV3(-1)).toBe('Invalid mark!');
    expect(classifyStudentV3(11)).toBe('Invalid mark!');
  });
  test('should return Excellence when n in [9-10]', () => {
    [9, 10].forEach((num) => {
      expect(classifyStudentV3(num)).toBe('Excellence');
    });
  });

  test('should return Excellence when n in [7-8]', () => {
    [7, 8].forEach((num) => {
      expect(classifyStudentV3(num)).toBe('Good');
    });
  });

  test('should return Excellence when n in [4-6]', () => {
    [4, 5, 6].forEach((num) => {
      expect(classifyStudentV3(num)).toBe('Not good');
    });
  });

  test('should return Excellence when n in [1, 2, 3]', () => {
    [1, 2, 3].forEach((num) => {
      expect(classifyStudentV3(num)).toBe('Bad');
    });
  });
});
