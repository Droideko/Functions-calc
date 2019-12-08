// Yesterday you found some shoes in the back of your closet. Each shoe is described by two values:

// type indicates if it's a left or a right shoe;
// size is the size of the shoe.

// Your task is to check whether it is possible to pair the shoes you found in such a way that each 
// pair consists of a right and a left shoe of an equal size.


function pairOfShoes(shoes) {
   outer: for (let i = 0; shoes.length !== 0; i++) {
      let item = shoes[i];
      let other = shoes.slice(i + 1, shoes.length);
      for (let j = 0; j < other.length; j++) {
         let item2 = other[j];
         if (item[0] !== item2[0] && item[1] === item2[1]) {
            shoes.splice(i, 1);
            shoes.splice(j, 1);
            i--;
            continue outer;
         }
      }
      return false;
   }
   return true;
}
console.log(pairOfShoes([
   [0, 21],
   [1, 23],
   [1, 21],
   [0, 23]
]));




// Cheking only one pair
function pairOfShoes(shoes) {
   return shoes.some((item, i, arr) => {
      let other = arr.slice(i + 1, arr.length);
      return other.some(item2 => {
         return item[0] !== item2[0] && item[1] === item2[1];
      });
   });
}
console.log(pairOfShoes([
   [0, 21],
   [1, 23],
   [1, 21],
   [1, 23]
]));



// Through the object
function pairOfShoes(shoes) {
   let obj = shoes.reduce((acc, next) => {
      acc.size[next[0]] = acc.size[next[0]] || 0;
      acc.size[next[0]] += 1;
      acc.pair[next[1]] = acc.pair[next[1]] || 0;
      acc.pair[next[1]] += 1;
      return acc;
   }, {
      size: {},
      pair: {}
   });
   if (obj.size[0] !== obj.size[1]) return false;
   for (let item in obj.pair) {
      if (obj.pair[item] % 2 !== 0) return false;
   }
   return true;
}
console.log(pairOfShoes([
   [0, 40],
   [1, 42],
   [1, 42],
   [0, 40]
]));
