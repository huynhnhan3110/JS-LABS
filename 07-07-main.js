// First letter in UPPERCASE
// The rest in lowercase
function capitalize(str) {
  if (str === '') return '';
  const firstLetter = str[0].toUpperCase();
  const rest = str.slice(1).toLowerCase();
  return `${firstLetter}${rest}`;
}
console.log(capitalize(''));
console.log(capitalize('NhaN hUU'));
console.log(capitalize('huyndai accent'));
console.log(capitalize('kiA Seltos'));
