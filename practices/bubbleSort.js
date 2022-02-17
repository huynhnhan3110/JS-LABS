function bubbleSort(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  // bubblesort
  for (let i = numberList.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (numberList[j] > numberList[j + 1]) {
        const temp = numberList[j];
        numberList[j] = numberList[j + 1];
        numberList[j + 1] = temp;
      }
    }
  }
  console.log(numberList);
  return numberList;
}
bubbleSort([1]);
bubbleSort([2, 1, 3]);
bubbleSort([4, 3, 6, 5, 1]);

function bubbleSort(numberList) {
  for (let i = numberList.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (numberList[j] > numberList[j + 1]) {
        const tmp = numberList[j + 1];
        numberList[j + 1] = numberList[j];
        numberList[j] = tmp;
      }
    }
  }
  console.log(numberList);
  return numberList;
}
bubbleSort([1]);
bubbleSort([2, 1, 3]);
bubbleSort([4, 3, 6, 5, 1]);

function mySort(numberList) {
  for (let i = 0; i <= numberList.length - 2; i++) {
    for (let j = i + 1; j <= numberList.length - 1; j++) {
      if (numberList[j] < numberList[i]) {
        const tmp = numberList[j];
        numberList[j] = numberList[i];
        numberList[i] = tmp;
      }
    }
  }
  console.log(numberList);
  return numberList;
}
mySort([1]);
mySort([2, 1, 3]);
mySort([4, 3, 6, 5, 1]);
mySort([14, 333, 16, 15, 122]);

function bubbleSort(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  for (let i = numberList.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (numberList[j] < numberList[j + 1]) {
        const tmp = numberList[j];
        numberList[j] = numberList[j + 1];
        numberList[j + 1] = tmp;
      }
    }
  }
  console.log(numberList);
  return numberList;
}
bubbleSort([1]);
bubbleSort([2, 1, 3]);
bubbleSort([4, 3, 6, 5, 1]);
bubbleSort([14, 333, 16, 15, 122]);
