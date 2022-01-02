export function validMountainArray(numberList) {
  if (!Array.isArray(numberList) || numberList.length < 3) return false;
  let maxNum;
  let maxIndex;
  for (let i = 0; i < numberList.length; i++) {
    const num = numberList[i];
    if (maxNum === undefined || maxNum < num) {
      maxNum = num;
      maxIndex = i;
    }
  }
  if (maxIndex === numberList.length - 1 || maxIndex === 0) return false;
  let isMoutainArray = true;
  for (let i = 0; i < maxIndex; i++) {
    const num = numberList[i];
    if (num >= numberList[i + 1]) {
      isMoutainArray = false;
    }
  }
  for (let i = maxIndex; i < numberList.length; i++) {
    const num = numberList[i];
    if (num <= numberList[i + 1]) {
      isMoutainArray = false;
    }
  }
  return isMoutainArray;
}
