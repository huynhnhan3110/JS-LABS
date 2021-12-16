// Tính S(n) = 1^2 + 2^2 + … + n^2
export function sumNV1(n) {
  if (n <= 0) return 0;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    const powNum = Math.pow(i, 2);
    sum += powNum;
  }
  return sum;
}

export function sumNV2(n) {
  if (n <= 0) return 0;

  const arr = Array.from({ length: n }, (_, k) => k + 1);
  return arr.reduce((sum, num) => sum + Math.pow(num, 2));
}

export function sumNV3(n) {
  if (n <= 0) return 0;

  const arr = Array.from({ length: n }, (_, k) => k + 1);
  let sum = 0;
  arr.forEach((num) => {
    sum += num * num;
  });
  return sum;
}
