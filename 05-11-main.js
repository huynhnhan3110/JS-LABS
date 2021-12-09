// E01 => 'Invalid username or email'
// E02 => 'Missing arguments'
// E03 => 'Too much arguments'
// ==> 'Something went wrong'
// Switch case way
function getErrorMessage(errorCode) {
  let message = '';

  switch (errorCode) {
    case 'E01': {
      message = 'Invalid username or email';
      break;
    }
    case 'E02': {
      message = 'Missing arguments';
      break;
    }
    case 'E03': {
      message = 'Too much arguments';
      break;
    }
    default: {
      message = 'Something went wrong';
    }
  }

  return message;
}
// v2 using object map
function getErrorMessage(errorCode) {
  const messageObj = {
    E01: 'Invalid username or email',
    E02: 'Missing arguments',
    E03: 'Too much arguments',
  };
  return messageObj[errorCode] || 'Something went wrong';
}

console.log(getErrorMessage('E01'));
console.log(getErrorMessage('E03'));
console.log(getErrorMessage('E02'));
console.log(getErrorMessage('E04'));
