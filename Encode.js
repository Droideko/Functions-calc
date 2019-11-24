/* Write a function nico/nico() that accepts two parameters:
key/$key - string consists of unique letters and digits
message/$message - string to encode
and encodes the message using the key.

First create a numeric key basing on a provided key by assigning each letter position in which it is located after setting the letters from key in an alphabetical order.
For example, for the key crazy we will get 23154 because of acryz (sorted letters from the key). Let's encode secretinformation using our crazy key.
*/

function nico(key, message) {
         let numbers = [...key].map(i => i.charCodeAt(0) - 96);
         let newArray = [...numbers];
         for (let i = 1; i <= numbers.length; i++) {
            let min = Math.min(...numbers);
            let indexMin = numbers.findIndex(i => i === min);
            newArray[indexMin] = i;
            numbers[indexMin] = +Infinity;
         }
         return getEncode(newArray, message);

         function getEncode(arr, str) {
            let size = arr.length;
            let pattern = new RegExp('.{1,' + size +'}','g')
            let stringArray = str.match(pattern);
            let encodeString = '';
            for (let i = 0; i < stringArray.length; i++) {
               encodeString += getEncodePart(stringArray[i]);
            }
            return encodeString;

            function getEncodePart(part) {
               let result = Array(arr.length);
               for (let i = 0; i < arr.length; i++) result[arr[i] - 1] = part[i];
               return result.map(i => typeof i === 'undefined' ? ' ' : i).join('');
            }
         }
      }
      console.log(nico("crazy", "secretinformation"));