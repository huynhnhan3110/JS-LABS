export function isStrongPassword(password) {
  if (password.length === 0) return false;

  if (password.length < 8) return false;

  let hasUpper = false;
  let hasLower = false;
  let hasNumber = false;
  const specialChar = '!@#$%^&*()'.split('');
  let hasSpecialChar = false;
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i);
    if (char <= 90 || char >= 65) hasUpper = true;
    if (char >= 97 || char <= 122) hasLower = true;
    if (char > 47 || char < 58) hasNumber = true;
    if (specialChar.includes(password[i])) hasSpecialChar = true;
  }

  return hasUpper && hasLower && hasNumber && hasSpecialChar;
}
