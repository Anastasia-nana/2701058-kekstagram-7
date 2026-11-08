function isStringLengthValid(string, maxLength) {
  return string.length <= maxLength;
}
function isPalindrome(string) {
  const normalized = string.replaceAll(' ', '').toLowerCase();

  let reversed = '';

  for (let i = normalized.length - 1; i >= 0; i -= 1) {
    reversed += normalized[i];
  }

  return reversed === normalized;
}


