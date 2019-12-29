// Determine if it is possible to sort an array by reversing one of its contiguous subarrays.

// It's guaranteed that array is not initially sorted.


function reverseToSort(arr) {
   let start,
       end;
   for (let i = 0; i < arr.length; i++){
      if (arr[i] > arr[i+1] && typeof start === 'undefined') start = i;
      if ((arr[i] < arr[i+1] || i == arr.length-1) && typeof start !== 'undefined' && typeof end === 'undefined') end = i + 1;
   }
   let reversingArray = [...arr.slice(0, start), ...arr.slice(start, end).reverse(), ...arr.slice(end, arr.length)];
   return reversingArray.every((_,i,a) => !a[i+1] ? true : a[i] < a[i+1] ? true : false);
}
console.log(reverseToSort([-1, 5, 4, 3, 2, 8]));