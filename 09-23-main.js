//  for...i
function hasPrimeV1(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  let result;
  for (let i = 0; i < numberList.length; i++) {
    result = true;
    const num = numberList[i];
    if (num === 0 || num === 1) result = false;
    for (let j = 2; j < num; j++) {
      if (num % j === 0) result = false;
    }
    if (result) break;
  }
  return result;
}
// console.log(hasPrimeV1([2, 3, 4]));
//  forEach
function hasPrimeV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  let result = [];
  numberList.forEach((element) => {
    if (element === 0 || element === 1) result.push(element);
    else {
      for (let i = 2; i <= Math.sqrt(element); i++) {
        if (element % i === 0) {
          result.push(element);
        }
      }
    }
  });
  return result.length < numberList.length;
}
// console.log(hasPrimeV2([4, 6, 8, 10]));

//  find
function hasPrimeV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  // your code here

  let result = [];
  numberList.find((element) => {
    if (element === 0 || element === 1) result.push(element);
    else {
      for (let i = 2; i <= Math.sqrt(element); i++) {
        if (element % i === 0) {
          result.push(element);
        }
      }
    }
  });

  return result.length < numberList.length;
}

//  findIndex
function hasPrimeV4(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  let result = [];
  numberList.findIndex((element) => {
    if (element === 0 || element === 1) result.push(element);
    else {
      for (let i = 2; i <= Math.sqrt(element); i++) {
        if (element % i === 0) {
          result.push(element);
        }
      }
    }
  });

  return result.length < numberList.length;
}

//  some
function hasPrimeV5(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  return numberList.some((element) => {
    let result = true;
    for (let i = 2; i <= Math.sqrt(element); i++) {
      if (element % i === 0) {
        result = false;
      }
    }
    if (element === 1 || element === 0) result = false;
    return result;
  });
}
// console.log(hasPrimeV5([1]));
