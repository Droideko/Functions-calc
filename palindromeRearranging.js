// Given a string, find out if its characters can be rearranged to form a palindrome.


function palindromeRearranging(str) {
   let hash = [...str].reduce((obj, next) => {
      obj[next] = obj[next] || 0;
      obj[next] += 1;
      return obj;
   }, {});
   for (key in hash) {
      if (hash[key] % 2 === 0) delete hash[key];
   }
   return Object.keys(hash).length === 1 || Object.keys(hash).length === 0;
}