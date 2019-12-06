// N candles are placed in a row, some of them are initially lit. 
// For each candle from the 1st to the Nth the following algorithm 
// is applied: if the observed candle is lit then states of this candle 
// and all candles before it are changed to the opposite. Which candles 
// will remain lit after applying the algorithm to all candles in the 
// order they are placed in the line?


function switchLights(a) {
   for (let i = 0; i < a.length; i++){
      if (a[i] === 1) {
         for (let j = 0; j < i; j++) a[j] = +!a[j];
         a[i] = +!a[i];
      }            
   }     
   return a;    
}
console.log(switchLights([1, 1, 1, 1, 1]));