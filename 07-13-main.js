// please try to use these constants in your code
const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MIN = 60;

function formatTime(seconds) {
  const hours = Math.floor(seconds / SECONDS_PER_HOUR);

  const secondsAndMinute = seconds % SECONDS_PER_HOUR;
  const minutes = Math.floor(secondsAndMinute / 60);
  const secondrs = secondsAndMinute % 60;

  const hoursFormat = '0' + hours;
  const minuteFormat = '0' + minutes;
  const secondsFormat = '0' + secondrs;

  return `${hoursFormat.slice(-2)}:${minuteFormat.slice(-2)}:${secondsFormat.slice(-2)}`;
}
console.log(formatTime(9));
console.log(formatTime(0));
console.log(formatTime(4256));
