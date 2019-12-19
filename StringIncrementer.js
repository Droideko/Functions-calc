// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.


function incrementString(str) {
   let n = str.match(/\d+$/g);
   if (!n) return `${str}1`;
   let one = 1;
   let res = n[0].split('').reverse().reduce((arr, n) => {
      if (one) {
         n = Number(n) + one;
         one = !one;
         if (n === 10) {
            n %= 10;
            one = 1;
         }
      }
      arr.push(n);
      return arr;
   }, []).reverse().join('');
   if (one) res = `1${res}`;
   return str.replace(/\d+$/, res);
}
console.log(incrementString('foobar999'));