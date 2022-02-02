// // S(n) = 1 + 2 + 3 + ... + n
// function calculateS(n) {
//   if (n === 0) return 0;
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

function calculateS(n) {
  if (n === 0) return 0; // BASE CASE
  // calculateS(5)
  // 5 + calculateS(4)
  // 4 + calculateS(3)
  // 3 + calculateS(2)
  // 2 + calculateS(1)
  // 1 + calculates(0)
  // calculateS(0) => BASE CASE -> return 0
  return n + calculateS(n - 1);
}

describe('calculateS', () => {
  it('should return correct number', () => {
    expect(calculateS(5)).toBe(15);
  });
});

// function fibonacci(n) {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
function fibonacci(n) {
  if (n === 1) return 1;
  if (n <= 0) return 0;
  let prev = 0;
  let next = 1;
  let current = 1;
  let i = 2;
  while (i <= n) {
    next = prev + current;
    i++;
    prev = current;
    current = next;
  }
  return next;
}
describe('fibonacci', () => {
  it('should return correct number', () => {
    [0, 1, 1, 2, 3, 5, 8, 13, 21, 34].forEach((result, num) => {
      expect(fibonacci(num)).toBe(result);
    });
  });
});
