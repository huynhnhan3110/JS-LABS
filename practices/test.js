// 'you are nice' => 'nice are you'
// 'you are nice' => 'ecin era..' => 'ecin => nice
function test(input) {
  const arrAfterSplit = splitString(input, ' ');

  let reverseArr = [];
  for (let i = arrAfterSplit.length - 1; i >= 0; i--) {
    reverseArr.push(arrAfterSplit[i]);
  }

  return reverseArr.join(' ');
}
function splitString(input, delimeter) {
  let arr = [''];
  let j = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === delimeter) {
      arr.push('');
      j++;
    } else {
      arr[j] += input[i];
    }
  }
  return arr;
}
console.log(test('you are     nice')); // --> nice are you
console.log(test('how          are   you')); // --> you   are      how
