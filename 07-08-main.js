// check if a string contains an email address with `@gmail.com` or not
function hasEmail(str) {
  return str.includes('@gmail.com');
  //return str.indexOf('@gmail.com') >= 0;
  //   return str.lastIndexOf('@gmail.com') >= 0;
}
console.log(hasEmail('jonni@gsaix.com asf'));
console.log(hasEmail('jonni@gmail.com asf'));
