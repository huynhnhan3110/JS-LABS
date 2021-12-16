export function sumNV1(n) {
  if (n <= 0) return 0;
  let sum = 0;
  const arr = Array.from({ length: n }, (v, k) => k + 1);

  arr.forEach((num) => {
    sum += num;
  });
  return sum;
}
export function sumNV2(n) {
  if (n <= 0) return 0;
  const numberList = Array.from({ length: n }, (_, k) => k + 1);
  return numberList.reduce((sum, num) => sum + num);
}
export function sumNV3(n) {
  if (n <= 0) return 0;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

export function sumNV4(n) {
  if (n <= 0) return 0;
  return (n * (n + 1)) / 2;
}
