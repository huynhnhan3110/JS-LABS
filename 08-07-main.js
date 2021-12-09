function isEqual(obj1, obj2) {
  const obj1Len = Object.keys(obj1).length;
  const obj2Len = Object.keys(obj2).length;
  if (obj1Len !== obj2Len) return false;

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}
const objA = { name: 'Nhan', age: 21 };
const objB = { name: 'Nhan', age: 11 };
console.log(isEqual(objA, objB));
