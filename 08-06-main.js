function cloneObject(obj) {
  const newObj = {};
  for (let key in obj) {
    newObj[key] = obj[key];
  }
  return newObj;
}

const objA = { name: 'Nhan', age: 21 };
const objB = cloneObject(objA);

console.log(objB.name);
console.log(objB.age);
