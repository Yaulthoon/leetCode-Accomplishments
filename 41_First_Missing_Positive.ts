var firstMissingPositive = function(nums) {
  var i = 1;
  var inNums = false;
  while (inNums === false) {
    if (nums.includes(i) === false) {
      return i;
    }
    i++;
  }
};
