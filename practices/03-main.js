export function sumSrtV1(n) {
  if (n <= 0) return 0;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += 1 / i;
  }
  return sum;
}
export function sumSrtV2(n) {
  if (n <= 0) return 0;

  let sum = 0;
  const arr = Array.from({ length: n }, (_, k) => k + 1);
  arr.forEach((num) => (sum += 1 / num));
  return sum;
}
export function sumSrtV3(n) {
  if (n <= 0) return 0;

  let sum = 0;
  const arr = Array.from({ length: n }, (_, k) => k + 1);

  return arr.reduce((sum, num) => (sum += 1 / num));
}
