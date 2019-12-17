// Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns 
// the sum of all the interval lengths. Overlapping intervals should only be counted once.

// Intervals are represented by a pair of integers in the form of an array. The first value of the 
// interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

function sumIntervals(intervals) {
   let result = 0;
   intervals.sort((a, b) => a[0] - b[0]);
   for (let i = 0; i < intervals.length; i++){
      let restIntervals = intervals.slice(i+1, intervals.length);
      for (let j = 0; j < restIntervals.length; j++){
         let secondInterval = restIntervals[j];
         if (intervals[i][1] > secondInterval[0]){
            let newInterval = [intervals[i][0], Math.max(intervals[i][1], secondInterval[1])];
            intervals[i] = [...newInterval];
            restIntervals[j] = [...newInterval];
            intervals.splice(i+1, 1);
         }
      }
      result += intervals[i][1] - intervals[i][0];
   };
   return result;
}
console.log(sumIntervals([[1,5],[10, 20],[1, 6],[16, 19],[5, 11]]));