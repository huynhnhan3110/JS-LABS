// passengersCount > 4 -> tinh xe 7 cho
// passengersCount <= 4 -> 1 xe 4 cho
//
function getTaxiCount(passengersCount) {
  if (passengersCount <= 0) return -1;

  if (passengersCount <= 4) return 1;

  return Math.ceil(passengersCount / 7);
}
console.log(getTaxiCount(3));
console.log(getTaxiCount(6));
console.log(getTaxiCount(10));
console.log(getTaxiCount(20));
