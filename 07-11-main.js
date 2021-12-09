// Easy frontend => sy frntnd
function removeVowel(str) {
  if (str.length === 0) return '';

  return str.replace(/[u,e,o,a,i]/gi, '').trim();
}
console.log(removeVowel('  Easy frontend  '));
console.log(removeVowel('  Say hello  '));
