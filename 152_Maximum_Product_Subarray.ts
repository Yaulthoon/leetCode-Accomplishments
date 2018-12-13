var secondRun = function(nums) {
  var i = 0;
  var current = 0;
  var max = 0;
  var local;
  for (i; i < nums.length; i++) {
    local = nums[i];
    if (current === 0) {
      current = nums[i];
    } else {
      current = current * nums[i];
    }
    if (local > max) {
      max = local;
    }
    if (current > max) {
      max = current;
    }
  }
  return max;
};

var maxProduct = function(nums) {
  var total = nums.reduce(function(a, b) { return a * b });
  var current = 0;
  var local;
  var negative;
  var max = 0;
  var i = 0;
  var firstArray;
  var secondArray;
  var thirdArray;
  var first;
  var second;
  var third;
  if (total > 0) {
    return total;
  }
  if (nums.length === 1) {
    return nums[0];
  }
  for (i; i < nums.length; i++) {
    local = nums[i];
    if (current === 0) {
      current = nums[i];
    } else {
      if (nums[i] === 0) {
        current = 0;
      } else {
        current = current * nums[i];
      }
      if (current <= 0 || nums[i - 1] < 0 && current > 0) {
        firstArray = nums.slice(i + 1, nums.length);
        secondArray = nums.slice(i - 1, nums.length);
        thirdArray = nums.slice(i, nums.length);
        first = secondRun(firstArray);
        second = secondRun(secondArray);
        third = secondRun(thirdArray);
      }
    }
    if (local > max) {
      max = local;
    }
    if (current > max) {
      max = current;
    }
    if (first > max) {
      max = first;
    }
    if (second > max) {
      max = second;
    }
    if (third > max) {
      max = third;
    }
  }
  return max;
};
