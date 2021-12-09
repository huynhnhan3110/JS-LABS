// create object
const student = {};
student.name = 'Easy FrontEnd';
student.age = 18;
console.log(student);

const student = {
  name: 'Easy FrontEnd',
  age: 18,
};
console.log(student);
// check object empty
function checkObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
console.log(checkObjectEmpty({}));
console.log(checkObjectEmpty({ 1: '1' }));
// Get average mark of object
function getAverage(obj) {
  const length = Object.keys(obj).length;
  let sum = 0;

  for (let key in obj) {
    sum += obj[key];
  }
  return (sum / length).toFixed(1);
}
console.log(getAverage({ math: 10, english: 8, biology: 2 }));
