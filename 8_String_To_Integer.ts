var myAtoi = function(str) {
  let isNegative = false;
  let string = str.trim();
  let num;
  if (string[0] === '-') {
    isNegative = true;
    string = string.substring(1);
    if (string[0] === ' ') {
      return 0;
    }
  }
  if (string[0] === '+') {
    if (isNegative) {
      return 0;
    }
    string = string.substring(1);
    if (string[0] === ' ') {
      return 0;
    }
  }
  if (isNaN(string[0])) {
    return 0;
  }
  if (isNegative) {
    num = parseInt(string) * -1;
  } else {
    num = parseInt(string);
  }
  if (num < Math.pow(-2, 31)) {
    return 2147483648 * -1;
  } else if (num >= Math.pow(2, 31)) {
    return Math.pow(2, 31) - 1;
  } else {
    return num;
  }
};
