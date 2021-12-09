// using for...i
function transformNumbersV1(numberList) {
  let result = [];
  if (numberList.length === 0) return result;
  if (numberList.length === 1) {
    result.push(numberList[0]);
    return result;
  }

  for (let i = 0; i < numberList.length; i++) {
    if (i === 0) {
      result[i] = numberList[i + 1];
    } else if (i === numberList.length - 1) {
      result[i] = numberList[numberList.length - 2];
    } else result[i] = numberList[i - 1] + numberList[i + 1];
  }

  return result;
}
// console.log(transformNumbersV1([6, 8]));
// using forEach()
function transformNumbersV2(numberList) {
  let result = [];
  if (numberList.length === 0) return result;
  if (numberList.length === 1) {
    result.push(numberList[0]);
    return result;
  }

  numberList.forEach((number, i) => {
    if (i === 0) {
      result[i] = numberList[i + 1];
    } else if (i === numberList.length - 1) {
      result[i] = numberList[numberList.length - 2];
    } else result[i] = numberList[i - 1] + numberList[i + 1];
  });

  return result;
}
//console.log(transformNumbersV2([6, 8]));
// using map()
function transformNumbersV3(numberList) {
  let result = [];
  if (numberList.length === 0) return result;
  if (numberList.length === 1) {
    result.push(numberList[0]);
    return result;
  }
  numberList.map((num, i) => {
    if (i === 0) {
      result[i] = numberList[i + 1];
    } else if (i === numberList.length - 1) {
      result[i] = numberList[numberList.length - 2];
    } else result[i] = numberList[i - 1] + numberList[i + 1];
  });
  return result;
}
//console.log(transformNumbersV3([6, 8]));
