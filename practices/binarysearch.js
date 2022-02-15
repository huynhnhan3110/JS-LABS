// recusion
function binarySearch(numberList, target, left, right) {
  if (!Array.isArray(numberList) || numberList.length === 0) return -1;
  if (right < left) return -1;

  const mid = Math.trunc((left + right) / 2);
  if (numberList[mid] === target) return mid;

  if (numberList[mid] < target) {
    return binarySearch(numberList, target, mid + 1, right);
  }

  return binarySearch(numberList, target, left, mid - 1);
}
console.log(binarySearch([1, 2, 3, 4, 5, 6], 2, 1, 6));
// not recusion
function binarySearch(numberList, num) {
  let left = 0;
  let right = numberList.length;

  while (left <= right) {
    const mid = left + Math.trunc((right - left) / 2);
    if (numberList[mid] === num) return mid;

    if (num > numberList[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5, 6], 5));
