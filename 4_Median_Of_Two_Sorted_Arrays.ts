var OddArray = function(nums1, nums2, len) {
  let nums3 = [];
  let i = 0;
  let j = 0;
  let k = 0;
  let length = Math.round(len / 2);
  if (nums2.length === 0) {
    return nums1[Math.floor(nums1.length / 2)];
  }
  if (nums1.length === 0) {
    return nums2[Math.floor(nums2.length / 2)];
  }
  for (i; i < length; i++) {
    if (nums1[j] === undefined) {
      nums3.push(nums2[k]);
      k++;
    } else if (nums2[k] === undefined) {
      nums3.push(nums1[j]);
      j++;
    } else if (nums1[j] <= nums2[k]) {
      nums3.push(nums1[j]);
      j++;
    } else {
      nums3.push(nums2[k]);
      k++;
    }
  }
  return nums3[nums3.length - 1];
};

var evenArray = function(nums1, nums2, len) {
  let nums3 = [];
  let i = 0;
  let j = 0;
  let k = 0;
  let length = Math.round(len / 2) + 1;
  if (nums2.length === 0) {
    let arr1 = nums1[nums1.length / 2 - 1];
    let arr2 = nums1[nums1.length / 2];
    return (arr1 + arr2) / 2;
  }
  if (nums1.length === 0) {
    let arr1 = nums2[nums2.length / 2 - 1];
    let arr2 = nums2[nums2.length / 2];
    return (arr1 + arr2) / 2;
  }
  for (i; i < length; i++) {
    if (nums1[j] === undefined) {
      nums3.push(nums2[k]);
      k++;
    } else if (nums2[k] === undefined) {
      nums3.push(nums1[j]);
      j++;
    } else if (nums1[j] <= nums2[k]) {
      nums3.push(nums1[j]);
      j++;
    } else {
      nums3.push(nums2[k]);
      k++;
    }
  }
  let number1 = nums3[nums3.length - 1];
  let number2 = nums3[nums3.length - 2];
  return (number1 + number2) / 2;
};

var findMedianSortedArrays = function(nums1, nums2) {
  let len = nums1.length + nums2.length;
  if (len % 2 === 1) {
    return OddArray(nums1, nums2, len);
  } else {
    return evenArray(nums1, nums2, len);
  }
};
