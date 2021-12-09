// using split
function extractDomainV1(email) {
  if (email.length === 0) return '';
  return email.split('@')[1];
}
console.log(extractDomainV1('huynhnhan.dev@gmail.com'));
// using indexOf() and slice()
function extractDomainV2(email) {
  return email.slice(email.indexOf('@') + 1);
}
console.log(extractDomainV2('huynhnhan.dev@gmail.com'));
