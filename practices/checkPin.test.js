const PIN_LENGTH = 6;
function isValidPIN(pin) {
  const newpin = pin.toString();
  if (pin.length !== PIN_LENGTH) return false;
  if (isIncOrDesc(pin)) return false;
  if (hasDuplicateNum(pin)) return false;
  if (hasLetter(pin)) return false;
  return true;
}
function hasLetter(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9') {
    } else {
      return true;
    }
  }
  return false;
}
function isIncOrDesc(str) {
  const numberList = str.split('');
  let isIncrease = 1;
  let isDecrease = 1;
  for (let i = 0; i <= numberList.length - 1; i++) {
    if (numberList[i] > numberList[i + 1]) {
      isIncrease += 1;
    }
    if (numberList[i] < numberList[i + 1]) {
      isDecrease += 1;
    }
  }
  return isIncrease > 5 || isDecrease > 5;
}
function hasDuplicateNum(str) {
  const numberList = str.split('');
  numberList.sort();
  for (let i = 1; i <= numberList.length - 1; i++) {
    if (numberList[i - 1] === numberList[i] && numberList[i + 1] === numberList[i]) {
      return true;
    }
  }
  return false;
}
console.log(hasDuplicateNum('111234'));
// console.log(isIncOrDesc('125456'));

console.log(isValidPIN('735201'));
