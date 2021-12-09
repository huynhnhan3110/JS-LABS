// classify student
// mark > 8 ---> 'Excellence'
// 7<=mark <=8 ---> 'Good'
// 4<= mark <=6 ---> 'Not good'
// mark < 4 ---> 'Bad'

// v1 ky thuat linh canh
function classifyStudent(mark) {
  let result;

  if (mark > 8) result = 'Excellence';
  else if (mark >= 7) result = 'Good';
  else if (mark >= 4) result = 'Not good';
  else result = 'Bad';

  return result;
}
console.log(classifyStudent(10));
console.log(classifyStudent(8));
console.log(classifyStudent(5));
console.log(classifyStudent(1));

// v2 gan gia tri dau tien cho linh canh
function classifyStudent(mark) {
  if (mark > 10 || mark < 0) return 'Invalid mark!';

  let result = 'Bad';
  if (mark > 8) result = 'Excellence';
  else if (mark >= 7) result = 'Good';
  else if (mark >= 4) result = 'Not good';

  return result;
}
console.log(classifyStudent(14));
console.log(classifyStudent(10));
console.log(classifyStudent(8));
console.log(classifyStudent(5));
console.log(classifyStudent(1));

// V3 if - return
function classifyStudent(mark) {
  if (mark > 10 || mark < 0) return 'Invalid mark!';

  if (mark > 8) return 'Excellence';
  if (mark >= 7) return 'Good';
  if (mark >= 4) return 'Not good';

  return 'Bad';
}
console.log(classifyStudent(14));
console.log(classifyStudent(10));
console.log(classifyStudent(8));
console.log(classifyStudent(5));
console.log(classifyStudent(1));
