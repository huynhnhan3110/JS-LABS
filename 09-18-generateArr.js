function createArrayInRangeV1(a, b) {
  if (a >= b || a <= -100 || a >= 100 || b <= -100 || b >= 100) return undefined;
  let result = [];
  for (let i = a; i <= b; i++) {
    result.push(i);
  }
  return result;
}

function createArrayInRangeV2(a, b) {
  if (a >= b || a <= -100 || a >= 100 || b <= -100 || b >= 100) return undefined;
  return Array.from({ length: b - a + 1 }, (v, i) => i + a);
}
console.log(createArrayInRangeV1(5, 10));

console.log(createArrayInRangeV2(5, 10));
