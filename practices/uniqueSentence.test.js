function uniqueSentence(sentence) {
  if (sentence.length === 0) return [];

  const wordList = sentence.split(' ').filter((item) => item.length > 0);

  const uniqueWordSet = new Set(wordList);
  return [...uniqueWordSet];
}
console.log(uniqueSentence('frontend is easy         but easy to die'));
describe('uniqueSentence', () => {
  it('should return empty array when input is a empty string', () => {
    expect(uniqueSentence('')).toEqual([]);
  });

  it('should return unique array when has duplicate word', () => {
    expect(uniqueSentence('Frontend is not easy but easy to learn')).toEqual([
      'Frontend',
      'is',
      'not',
      'easy',
      'but',
      'to',
      'learn',
    ]);
  });
});
