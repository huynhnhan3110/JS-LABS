function sayHello(languageCode) {
  let helloMessage;

  switch (languageCode) {
    case 'en': {
      helloMessage = 'Hello';
      break;
    }
    case 'vi': {
      helloMessage = 'Xin chào';
      break;
    }
    case 'fr': {
      helloMessage = 'Bonjour';
      break;
    }
    case 'cn': {
      helloMessage = 'Nǐ hǎo';
      break;
    }
    case 'ja': {
      helloMessage = 'Konnichiwa';
      break;
    }
    case 'ko': {
      helloMessage = 'Anyoung haseyo';
      break;
    }
    default:
      helloMessage = 'Hello';
  }

  return helloMessage;
}

console.log(sayHello('ko'));

// v2 object map
function sayHello(languageCode) {
  const helloMessagesMap = {
    en: 'Hello',
    vi: 'Xin chào',
    fr: 'Bonjour',
    cn: 'Nǐ hǎo',
    ja: 'Konnichiwa',
    ko: 'Anyoung haseyo',
  };
  return helloMessagesMap[languageCode] || 'Hello';
}
console.log(sayHello('ko'));
