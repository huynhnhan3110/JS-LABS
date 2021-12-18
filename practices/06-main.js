export function isIncreasingNumberV1(n) {
  if (n < 10) return false;

  const nStr = n + '';
  const arr = nStr.split('');

  let firstN = Number(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (Number(arr[i]) <= firstN) {
      return false;
    }
    firstN = arr[i];
  }
  return true;
}
export function isIncreasingNumberV2(n) {
  if (n < 10) return false;

  const nStr = n + '';
  const arr = nStr.split('');
  return arr.reduce((sum, num) => {
    if (Number(num) <= Number(sum)) {
      return false;
    }
    return true;
  }, Number(arr[0]));
}
