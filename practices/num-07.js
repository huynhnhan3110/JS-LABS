// export function isIncreasingNumber(n) {
//   if (n < 10) return false;

//   let prevDigist = 10;
//   let remaning = n;
//   // 123
//   while (remaning > 0) {
//     const lastNum = remaning % 10; // 13 -> 3, 123 -> 3, 0

//     if (lastNum >= prevDigist) return false; // 3 <= 10, 0 >= 3

//     prevDigist = lastNum; // prev = 3, 0

//     remaning = Math.trunc(remaning / 10); // 13 -> 1, 1 , 3 , 1 / 10 =0
//   }
//   return true;
// }
export function isIncreasingNumber(n) {
  if (n < 10) return false;
  const nString = n.toString();
  for (let i = 1; i < nString.length; i++) {
    if (nString[i] <= nString[i - 1]) return false;
  }
  return true;
}
