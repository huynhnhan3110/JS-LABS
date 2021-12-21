function isAlice(student) {
  return student.name.toLowerCase() === 'alice' && student.gender === 'female';
}
// for i
// export function hasAlice(studentList) {
//   if (!Array.isArray(studentList) || studentList.length === 0) return false;

//   for (let i = 0; i < studentList.length; i++) {
//     if (isAlice(studentList[i])) return true;
//   }
//   return false;
// }
// for each (can stop in loop)
// export function hasAlice(studentList) {
//   if (!Array.isArray(studentList) || studentList.length === 0) return false;

//   let result = false;
//   studentList.forEach((student) => {
//     if (isAlice(student)) result = true;
//   });
//   return result;
// }
// find !! cast to boolean
// export function hasAlice(studentList) {
//   if (!Array.isArray(studentList) || studentList.length === 0) return false;
//   return !!studentList.find((student) => isAlice(student));
// }

// findIndex (RECOMMENED) return number >= 0 when find alice
// export function hasAlice(studentList) {
//   if (!Array.isArray(studentList) || studentList.length === 0) return false;
//   return studentList.findIndex((student) => isAlice(student)) >= 0;
// }
// filter return object when match condition compare length to answer result
export function hasAlice(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return false;
  return studentList.filter((student) => isAlice(student)).length > 0;
}
