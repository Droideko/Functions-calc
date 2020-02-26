// Given a string of digits, return all of the possible  non-empty letter combinations that the number could 
// represent. The mapping of digits to letters is the same as you would find on a telephone's buttons

function pressingButtons(buttons) {
   const result = [];
   const matches = {
      2: ['a', 'b', 'c'],
      3: ['d', 'e', 'f'],
      4: ['g', 'h', 'i'],
      5: ['j', 'k', 'l'],
      6: ['m', 'n', 'o'],
      7: ['p', 'q', 'r', 's'],
      8: ['t', 'u', 'v'],
      9: ['w', 'x', 'y', 'z']
   };
   const arr = [...buttons].reduce((acc, next) => {
      if (matches[next]) {
         acc.push(matches[next]);
      }
      return acc;
   }, []);

   if (arr.length === 0) return result;
   getResult(arr);

   function getResult(arr, s) {
      if (arr.length === 1) {
         for (let i = 0; i < arr[0].length; i++) {
            result.push(`${s||''}${arr[0][i]}`);
         }
      } else {
         for (let i = 0; i < arr[0].length; i++) {
            getResult(arr.slice(1, arr.length), `${s||''}${arr[0][i]}`);
         }
      }
   }
   return result;
}
console.log(pressingButtons('2345'));