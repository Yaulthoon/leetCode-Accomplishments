var maxArea = function(height) {
  let current = 0;
  let max = 0;
  let i = 0;
  let j = height.length - 1;
  let left;
  let right;
  let pointer;
  let lastDirection;
  while (i < j) {
    left = height[i];
    right = height[j];
    if (lastDirection) {
      while (lastDirection === 0) {
        if (left > pointer) {
          lastDirection = 1;
        } else {
          i++;
          left = height[i];
        }
      }
    } else {
      while (lastDirection === 1) {
        if (right > pointer) {
          lastDirection = 0;
        } else {
          j--;
          right = height[j];
        }
      }
    }
    current = Math.min(left, right) * (j - i);
    if (current > max) {
      max = current;
    }
    if (left > right) {
      pointer = right;
      lastDirection = false;
      j--;
    } else {
      pointer = left;
      lastDirection = true;
      i++;
    }
  }
  return max;
};
