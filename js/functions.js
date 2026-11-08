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

console.log('--- Длина строки ---');
console.log(isStringLengthValid('проверяемая строка', 20));
console.log(isStringLengthValid('проверяемая строка', 18));
console.log(isStringLengthValid('проверяемая строка', 10));

console.log('--- Палиндром ---');
console.log(isPalindrome('топот'));
console.log(isPalindrome('ДовОд'));
console.log(isPalindrome('Кекс'));
console.log(isPalindrome('Лёша на полке клопа нашёл '));

