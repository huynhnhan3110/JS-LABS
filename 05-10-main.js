// classify student
// mark > 8 ---> 'Excellence'
// 7<=mark <=8 ---> 'Good'
// 4<= mark <=6 ---> 'Not good'
// mark < 4 ---> 'Bad'

// Switch case (khong khuyen khich)
function classifyStudent(n) {
  let result;

  switch (n) {
    case 1:
    case 2:
    case 3: {
      result = 'Bad';
      break;
    }
    case 4:
    case 5:
    case 6: {
      result = 'Not good';
      break;
    }
    case 7:
    case 8: {
      result = 'Good';
      break;
    }
    case 9:
    case 10: {
      result = 'Excellence';
      break;
    }
    default: {
      result = 'Invalid Mark';
    }
  }

  return result;
}
console.log(classifyStudent(12));

console.log(classifyStudent(10));
console.log(classifyStudent(8));
console.log(classifyStudent(5));
console.log(classifyStudent(1));
