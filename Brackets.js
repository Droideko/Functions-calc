// Check for correct parentheses

function brackets(str) {
   let exist = finderBrackets(str);
   let first, second;
   while (exist) {
      [first, second] = finderBrackets(str);
      str = str.slice(0, first) + str.slice(first + 1, second) + str.slice(second + 1, str.length);
      exist = finderBrackets(str);
   }
   return str.indexOf('(') === -1 && str.indexOf(')') === -1;

   function finderBrackets(str) {
      let result = [],
         i = 0;
      for (i; i < str.length; i++) {
         if (str[i] == '(') {
            result.push(i);
            break;
         }
      }
      for (i; i < str.length; i++) {
         if (str[i] == ')') {
            result.push(i);
            break;
         }
      }
      return result.length === 2 ? result : false;
   }
}
console.log(brackets('(at(a)(s))'));