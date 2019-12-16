// You are given n rectangular boxes, the ith box has the length lengthi, the width widthi and the height heighti. 
// Your task is to check if it is possible to pack all boxes into one so that inside each box there is no more than one 
// another box (which, in turn, can contain at most one another box, and so on). More formally, your task is to check whether 
// there is such sequence of n different numbers pi (1 ≤ pi ≤ n) that for each 1 ≤ i < n the box number pi can be put into the box number pi+1.
// A box can be put into another box if all sides of the first one are less than the respective ones of the second one. 
// You can rotate each box as you wish, i.e. you can swap its length, width and height if necessary.


function boxesPacking(length, width, height) {
   let boxes = [];
   for (let i = 0; i < length.length; i++) {
      let box = [];
      box.push(length[i], width[i], height[i]);
      boxes.push(box);
   }
   boxes.sort((a, b) => Math.max(...a) - Math.max(...b));
   return boxes.every((_, i, arr) =>  (!arr[i + 1]) ? true : checkBox([...arr[i]], [...arr[i+1]]));

   function checkBox(first, second) {
      if (first.length === 0 && second.length === 0) return true;
      let maxSizeFirst = Math.max(...first);
      let maxSizeSecond = Math.max(...second);
      first.splice(first.indexOf(maxSizeFirst), 1);
      second.splice(second.indexOf(maxSizeSecond), 1);
      return maxSizeFirst < maxSizeSecond ? checkBox(first, second) : false;
   }
}
console.log(boxesPacking([1, 3, 2], [1, 3, 2], [1, 3, 2]));