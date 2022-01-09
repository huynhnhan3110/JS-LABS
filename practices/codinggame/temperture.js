function test(numberList) {
  if (numberList.length === 0) return 0;
  const arrSort = numberList.sort((a, b) => {
    return a - b;
  });
  const positiveNumIndex = arrSort.findIndex((num) => {
    return num >= 0;
  });
  if (Math.abs(arrSort[positiveNumIndex - 1]) >= arrSort[positiveNumIndex]) {
    return arrSort[positiveNumIndex];
  } else {
    return arrSort[positiveNumIndex - 1];
  }
  return -1;
}
console.log(test([-5, -4, -2, 12, -40, 4, 2, 18, 11, 5]));
