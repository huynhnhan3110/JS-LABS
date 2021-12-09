function getFullName(firstName, lastName) {
  let firsN = '';
  let lastN = '';
  if (firstName !== null) {
    if (firstName !== undefined) {
      firsN += firstName.trim();
      firsN = firsN.charAt(0).toUpperCase() + firsN.slice(1).toLowerCase();
    }
  }
  if (lastName !== null) {
    if (lastName !== undefined) {
      lastN += lastName.trim();
      lastN = lastN.charAt(0).toUpperCase() + lastN.slice(1).toLowerCase();
    }
  }

  const rs = firsN + ' ' + lastN;
  return rs.trim();
}
console.log(getFullName('Alice'));
console.log(getFullName('Alice', ''));
console.log(getFullName('', 'Alice'));
console.log(getFullName('nnon     ', '    nnan'));
console.log(getFullName('HuU', 'pHaM'));
