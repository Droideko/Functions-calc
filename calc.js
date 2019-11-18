function getResult(arr){
   const operands = arr.match(/\d+/g);
   const operator = arr.match(/[\+\-\/\*]{1}/)[0];
   switch (operator){
      case '+': return +operands[0] + +operands[1]; break;
      case '-': return +operands[0] - +operands[1]; break;
      case '*': return +operands[0] * +operands[1]; break;
      case '/': return Math.floor(+operands[0] / +operands[1]); break;
   }
}

const zero = (...args) => args.length > 0 ? getResult(`0${args}`) : 0;
const one = (...args) => args.length > 0 ? getResult(`1${args}`) : 1;
const two = (...args) => args.length > 0 ? getResult(`2${args}`) : 2;
const three = (...args) => args.length > 0 ? getResult(`3${args}`) : 3;
const four = (...args) => args.length > 0 ? getResult(`4${args}`) : 4;
const five = (...args) => args.length > 0 ? getResult(`5${args}`) : 5;
const six = (...args) => args.length > 0 ? getResult(`6${args}`) : 6;
const seven = (...args) => args.length > 0 ? getResult(`7${args}`) : 7;
const eight = (...args) => args.length > 0 ? getResult(`8${args}`) : 8;
const nine = (...args) => args.length > 0 ? getResult(`9${args}`) : 9;

const plus = (...args) => `+${args}`; 
const minus = (...args) => `-${args}`; 
const times = (...args) => `*${args}`; 
const dividedBy = (...args) => `/${args}`; 

console.log(seven(dividedBy(two())));