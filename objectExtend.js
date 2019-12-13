// Let's make a function that returns a new object, containing all of the properties of any objects passed in as parameters.

// The returned object should include the first instance of each property seen on any parameter object, and any other instance of that property should be ignored.


function extend(...args) {
   let keys = new Set();
   return args.reduce((acc, next) => {
      if (typeof next !== 'object') return acc;
      for (key in next){
         if (!keys.has(key)){
            acc[key] = next[key];
            keys.add(key);
         }                
      }
      return acc;
   },{});
}
console.log(extend({a: false, b: null}, {a: true, b: 2, c: 3})); // {a: false, b: null, c: 3}