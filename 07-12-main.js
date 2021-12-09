// using if...else
function formatSecondsV1(seconds) {
  if (seconds.toString().length < 2) {
    return `0${seconds}`;
  } else {
    return seconds;
  }
}

// using slice()
function formatSecondsV2(seconds) {
  const Digits = '0' + seconds;
  const twoDigits = Digits.slice(-2);
  return twoDigits;
}

console.log(formatSecondsV2(3));
console.log(formatSecondsV2(23));
console.log(formatSecondsV2(33));
console.log(formatSecondsV2(13));
