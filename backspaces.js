// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

function cleanString(s) {
   return [...s].reduce((acc, sign) => sign === '#' ? acc.substring(0, acc.length - 1) : acc += sign, '');
};

console.log(cleanString("abc#d##c"))