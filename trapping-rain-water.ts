/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var maxHeight = Math.max(...height);
    var index = height.indexOf(maxHeight);
    var i = 0;
    var j = height.length - 1;
    var leftAmount = 0;
    var leftHeight = 0;
    var rightAmount = 0;
    var rightHeight = 0;
    for (i; i < index; i++) {
        if (i === 0 || leftHeight < height[i]) {
            leftHeight = height[i];
            continue;
        }
        leftAmount += leftHeight - height[i];
    }
    for (j; j > index; j--) {
        if (j === height.length - 1 || rightHeight < height[j]) {
            rightHeight = height[j];
            continue;
        }
        rightAmount += rightHeight - height[j];
    }
    return leftAmount + rightAmount;

};
