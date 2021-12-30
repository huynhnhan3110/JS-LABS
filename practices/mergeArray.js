export function mergeArray(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) return [];

  let result = a;
  for (let i = 0; i < b.length; i++) {
    const num = b[i];
    if (!result.includes(num)) result.push(num);
  }
  return result;
}
