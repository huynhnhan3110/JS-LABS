// Js easy tO use => js-easy-to-use
function parameterize(str) {
  return str.toLowerCase().replaceAll(' ', '-');
}
console.log(parameterize('Js eaSy to Use'));
//v2 split, join
function parameterize(str) {
  return str.toLowerCase().split(' ').join('-');
}
console.log(parameterize('Js eaSy to Use'));
