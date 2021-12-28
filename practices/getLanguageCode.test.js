import { getLanguageCodeFromURL } from './getLanguageCode';
describe('getLanguageCodeFromURL', () => {
  test('should be return `en` when has not support language in URL', () => {
    expect(getLanguageCodeFromURL('https://www.udemy.com/')).toBe('en');
    expect(getLanguageCodeFromURL('https://www.udemy.com/abc')).toBe('en');
  });

  test('should be return language code when has support language in URL', () => {
    expect(getLanguageCodeFromURL('https://www.udemy.com/vi')).toBe('vi');
    expect(getLanguageCodeFromURL('https://www.udemy.com/en')).toBe('en');
    expect(getLanguageCodeFromURL('https://www.udemy.com/vi/')).toBe('vi');
    expect(getLanguageCodeFromURL('https://www.udemy.com/cn/')).toBe('cn');
  });
});
