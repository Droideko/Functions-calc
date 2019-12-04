/* Move the first letter of each word to the end of it, then add "ay" 
to the end of the word. Leave punctuation marks untouched. */

function pigIt(str) {
   const end = 'ay';
   return str.split(' ').reduce((string, next) => {
      if (/^[a-z]+$/i.test(next)){
         let part = next.slice(1, next.length);
         return string += `${part}${next[0]}${end} `;
      } 
      return `${string}${next}`;   
   },'').trim();      
}
console.log(pigIt('Hello world !'));