// Given an array of 2k integers (for some integer k), perform the following operations until the array contains only one element:

// On the 1st, 3rd, 5th, etc. iterations (1-based) replace each pair of consecutive elements with their sum;
// On the 2nd, 4th, 6th, etc. iterations replace each pair of consecutive elements with their product.
// After the algorithm has finished, there will be a single element left in the array. Return that element.



function arrayConversion(inputArray) {         
   for (let i = 1; inputArray.length !== 1; i++){
      let arr = [];
      if (i % 2){
         for (let j = 0; j < inputArray.length; j+=2){
            arr.push(inputArray[j] + inputArray[j+1] || 0);                                    
         }
      } else {
         for (let j = 0; j < inputArray.length; j+=2){
            arr.push(inputArray[j] * inputArray[j+1] || 0);                                    
         }
      }
      inputArray = [...arr];
   }
   return inputArray[0]
}
console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));