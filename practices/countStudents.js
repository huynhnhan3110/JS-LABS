export function countStudents(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return 0;

  return studentList.reduce((total, eachstudentObj) => {
    if (eachstudentObj['gender'] === 'male') {
      total += 1;
    }
    return total;
  }, 0);
}
