var longestPalindrome = function(s) {
  let len = s.length;
  let start = 0;
  let end = 0;
  let i = 0;
  let left;
  let right;
  let array = s.split('');
  //Strings of one or two letters are always paladromes
  if (s.length < 2) {
    return s;
  }
  for (i; i < len;) {
    left = i;
    right = i;

    //Break if we reach the end of the array
    if (len - i <= 0) {
      break;
    }
    //While the string repeats itself to the right, we increase right bound.
    while (right < (len - 1) && array[right + 1] === array[right]) {
      right++;
    }
    //i indicates stopping point in the array, so we may restart the loop
    i = right + 1;

    //If we're in bounds of the array, right becomes the center point and we expand on both sides
    while (right < (len - 1) && left > 0 && array[right + 1] === array[left - 1]) {
      right++;
      left--;
    }
    let distance = right - left + 1;
    //Set the end point on the right based on the current location we are in in the array
    if (end < distance) {
      end = distance;
      start = left;
    }
    //Restart the loop at the next, nonidentical character in the string
  }

  //Use the start and end points to return the substring
  return s.substr(start, end);
};
