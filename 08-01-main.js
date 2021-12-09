const student = {
  name: 'Easy Frontend',
  const: 'haha',
  function: 'it works',
  true: 'work too',
  parent: {
    name: 'Bell',
    age: 42,
  },
};
const copyEqual = student;
const copyStudent = {
  ...student,
  parent: {
    ...student.parent,
  },
};
copyStudent.parent.name = 'John';
console.log(student.parent.name);
console.log(copyStudent.parent.name);

const student = {
  name: 'Easy Frontend',
  age: 18,
};
const moreProps = {
  isHero: true,
  gender: 'male',
};
// v1: using Object.assign()
const clonedStudent = Object.assign({}, student);
console.log(clonedStudent);

const student = {
  name: 'Easy Frontend',
  age: 18,
};
console.log('name' in student); // true
console.log('agse' in student); // true
'isHero' in student; // false

const student = {
  name: 'Easy Frontend',
  age: 18,
};
// new way usign object destructuring
const { name, age } = student; // recommended
console.log(name);
console.log(age);

const name = 'Easy Frontend';
const age = 18;
const sonata = {
  name,
  age,
  price: 20102,
};

// shorthand (recommended)
const student = {
  name,
  age,
  sonata,
};
console.log(student);
