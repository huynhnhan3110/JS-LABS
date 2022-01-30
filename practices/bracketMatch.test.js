function isValidBracketPairs(str) {
  if (str.length === 0) return true;

  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '[' || str[i] === '{') stack.push(str[i]);

    if (str[i] === ')' || str[i] === ']' || str[i] === '}') {
      const topLetter = stack[stack.length - 1];
      if (
        (topLetter === '(' && str[i] === ')') ||
        (topLetter === '[' && str[i] === ']') ||
        (topLetter === '{' && str[i] === '}')
      ) {
        stack.pop();
      } else return false;
    }
  }
  return stack.length === 0;
}
describe('isValidBracketPairs', () => {
  it('should return true if string has pair brackets', () => {
    expect(isValidBracketPairs('(a+b) * (c+d)')).toBe(true);
  });
  it('should return true if string has pair brackets', () => {
    expect(isValidBracketPairs('(a+b) * [c+d')).toBe(false);
  });
  it('should return false if string has pair brackets', () => {
    expect(isValidBracketPairs('(a+b) * [a+b')).toBe(false);
  });
});
