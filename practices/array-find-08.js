// for i
// export function findStudentById(studentList, studentId) {
//   if (!Array.isArray(studentList) || studentList.length === 0) return -1;

//   for (let i = 0; i < studentList.length; i++) {
//     if (studentList[i].id === studentId) return i;
//   }
//   return -1;
// }
// for each
// export function findStudentById(studentList, studentId) {
//   if (!Array.isArray(studentList) || studentList.length === 0) return -1;
//   let indexRs = -1;
//   let idx = 0;
//   studentList.forEach((student) => {
//     if (student.id === studentId) indexRs = idx;
//     idx++;
//   });
//   return indexRs;
// }
export function findStudentById(studentList, studentId) {
  if (!Array.isArray(studentList) || studentList.length === 0) return -1;
  return studentList.findIndex((student) => studentId === student.id);
}
