// truncate 'Easy frontend' -> 'Eas + ellips
function truncate(str, maxLength) {
  if (str.length <= maxLength) return str;
  const shortStr = str.slice(0, maxLength - 1);
  return `${shortStr}\u2026`;
}
console.log(truncate('Easy', 4));
console.log(truncate('Easy frontend', 4));
