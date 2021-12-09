// so hoan hao (isPerfectnumber)
function isPerfectNumber(n) {
  let divisorList = [];
  for (let i = 1; i < n - 1; i++) {
    if (n % i === 0) {
      divisorList.push(i);
    }
  }
  console.log(divisorList);
  const result = divisorList.reduce((sum, number) => (sum += number), 0);
  return result === n;
}
console.log(isPerfectNumber(2));
