// using indexOf()
function isSecureUrlV1(url) {
  return url.indexOf('https') > -1 || url.indexOf('wss') > -1;
}
// using startsWith()
function isSecureUrlV2(url) {
  return url.startsWith('https') || url.startsWith('wss');
}

console.log(isSecureUrlV2('http://abc.com'));
console.log(isSecureUrlV2('https://abc.com'));
console.log(isSecureUrlV2('ws://abc.com'));
console.log(isSecureUrlV2('wss://abc.com'));
