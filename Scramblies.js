// Complete the function scramble(str1, str2) that returns true if a portion of str1 
// characters can be rearranged to match str2, otherwise returns false.

// Solution with optimize
function scramble(str1, str2) {
   let obj = [...str1].reduce((obj, next) => {
      obj[next] = obj[next] || 0;
      obj[next] += 1;
      return obj;
   }, {});
   return [...str2].every(el => {
      if (obj[el] > 0) {
         obj[el] -= 1;
         return true;
      }
      return false;
   });
}
console.log(scramble('wasodasrld', 'wzorld'));

// Without optimize
function scramble(str1, str2) {
   return [...str2].every(el => {
      let find = [...str1].findIndex(item => item === el);
      if (find === -1) return false;
      str1 = str1.slice(0, find) + str1.slice(find + 1, str1.length);
      return true;
   })
}
console.log(scramble('rkqodlw', 'world'));