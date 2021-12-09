// Dien tich hcn
function calcAreaRect(a, b) {
  if (a <= 0 || b <= 0) return -1;
  return a * b;
}
console.log(calcAreaRect(5, 2));

// Chu vi hcn
function calcPerimeterRect(a, b) {
  if (a <= 0 || b <= 0) return -1;
  return (a + b) * 2;
}
console.log(calcPerimeterRect(5, 2));
// Dien tich hinh tron
function calcAreaCircle(r) {
  if (r <= 0) return -1;
  return Math.PI * r * r;
}
console.log(calcAreaCircle(5));
