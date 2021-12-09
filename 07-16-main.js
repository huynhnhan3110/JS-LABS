function findSecret(code) {
  const arrLetter = code.split('');
  let result = '';
  for (let i = 0; i < arrLetter.length; i++) {
    if (arrLetter[i] === arrLetter[i].toLowerCase()) result += arrLetter[i];
  }
  return result;
}
console.log(findSecret('HELLOWORLD'));
console.log(findSecret('HELLOabaseWORLD'));
console.log(findSecret('fsfHwELLaOWORsLDasd'));
