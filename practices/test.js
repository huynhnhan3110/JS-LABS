// 'you are nice' => 'nice are you'
// 'you are nice' => 'ecin era..' => 'ecin => nice
function test(str) {
  let lengthStr = str.length;
  let s = '';

  while (str.indexOf(' ') !== -1) {
    const index = str.lastIndexOf(' ');
    let strAfter = str.substring(index + 1, lengthStr);
    str = str.substring(0, index + 1);
  }
  return s;
}
console.log(test('you are nice'));
console.log(test('how       are   you'));
