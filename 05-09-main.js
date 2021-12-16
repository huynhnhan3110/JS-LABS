// classify student
// mark > 8 ---> 'Excellence'
// 7<=mark <=8 ---> 'Good'
// 4<= mark <=6 ---> 'Not good'
// mark < 4 ---> 'Bad'

// v1 ky thuat linh canh
export function classifyStudentV1(mark) {
  if (mark > 10 || mark < 0) return 'Invalid mark!';
  let result;
  if (mark > 8) result = 'Excellence';
  else if (mark >= 7) result = 'Good';
  else if (mark >= 4) result = 'Not good';
  else result = 'Bad';

  return result;
}

// v2 gan gia tri dau tien cho linh canh
export function classifyStudentV2(mark) {
  if (mark > 10 || mark < 0) return 'Invalid mark!';

  let result = 'Bad';
  if (mark > 8) result = 'Excellence';
  else if (mark >= 7) result = 'Good';
  else if (mark >= 4) result = 'Not good';

  return result;
}
// V3 if - return
export function classifyStudentV3(mark) {
  if (mark > 10 || mark < 0) return 'Invalid mark!';

  if (mark > 8) return 'Excellence';
  if (mark >= 7) return 'Good';
  if (mark >= 4) return 'Not good';

  return 'Bad';
}
console.log(classifyStudentV1(14));
console.log(classifyStudentV2(10));
console.log(classifyStudentV3(1));
