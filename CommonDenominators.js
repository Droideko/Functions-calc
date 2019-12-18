// Searching common denominators

function convertFrac(lst) {
   let denominators = lst.map(i => i[1])
   let maxDenominator = Math.max(...denominators);
   let commonDenominator = maxDenominator;
   let flag = true;
   while (flag) {
      let check = denominators.every(denominator => {
         if (commonDenominator % denominator === 0) return true;
         else {
            commonDenominator += maxDenominator;
            return false;
         }
      });
      if (check) flag = false;
   }
   return lst.map(number => `(${(commonDenominator / number[1]) * number[0]},${commonDenominator})`).join('');
}

console.log(convertFrac([[1, 2],[1, 3],[1, 4]]));