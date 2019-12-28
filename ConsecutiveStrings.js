// You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

function longestConsec(str, k) {
   if (k <= 0) return '';
   return str.reduce((acc, next, i, arr) => {
      if (!arr[i+k-1]) return acc;
      let subArray = arr.slice(i, i+k);
      let sizeStr = subArray.join('').length;
      if (sizeStr > acc.length) acc = subArray.join('');
      return acc;
   }, '');         
}
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));