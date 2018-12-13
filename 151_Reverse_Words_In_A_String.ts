var endSpaceGuard = function(str) {
  var string = str;
  var times = 0;
  while (string[string.length - 1] === " ") {
    times++;
    string = string.substring(0, str.length - times);
    if (times === 20) {
      return "";
    }
  }
  times = 0;
  while (string[0] === " ") {
    times++;
    string = string.substring(times);
  }
  return string;
};

var reverseWords = function(str) {
  var i = 0;
  var initialArray = str.split(' ');
  var reverseArray = initialArray.reverse();
  var concat = "";
  for (i; i < reverseArray.length; i++) {
    if (reverseArray[i] !== "") {
      if (i === reverseArray.length - 1) {
        concat += reverseArray[i];
      } else {
        concat += reverseArray[i] + " ";
      }
    }
  }
  return endSpaceGuard(concat);
};
