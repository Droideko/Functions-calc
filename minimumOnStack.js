// Implement a modified stack that, in addition to using push and pop operations, allows you to find the current minimum element in the stack by using a min operation.

function minimumOnStack(operations) {
   return operations.reduce(({
      stack,
      result
   }, operation) => {
      [operation, number] = operation.split(' ');
      switch (operation) {
         case 'push':
            stack.push(number);
            break;
         case 'pop':
            stack.pop();
            break;
         case 'min':
            result.push(Math.min(...stack));
            break;
         default:
            break;
      }
      return {
         stack,
         result
      };
   }, {
      stack: [],
      result: []
   }).result;
}

console.log(minimumOnStack(["push 10",
   "min",
   "push 5",
   "min",
   "push 8",
   "min",
   "pop",
   "min",
   "pop",
   "min"
]));