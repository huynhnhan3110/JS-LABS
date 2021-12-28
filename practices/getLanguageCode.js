// please use these constants in your code
const DEFAULT_LANGUAGE = 'en';
const SUPPORTED_LANGUAGE_LIST = ['en', 'vi', 'cn'];

export function getLanguageCodeFromURL(url) {
  const languageCode = url.lastIndexOf('/') === url.length - 1 ? url.slice(-3, -1) : url.slice(-2);
  if (!SUPPORTED_LANGUAGE_LIST.includes(languageCode)) return DEFAULT_LANGUAGE;
  return languageCode;
}
