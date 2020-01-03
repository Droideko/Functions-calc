// The rgb() method is incomplete. Complete the method so that passing in 
// RGB decimal values will result in a hexadecimal representation being 
// returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) 
// argument values that fall out of that range should be rounded to the 
// closest valid value.


function rgb(r, g, b) {
   let args = [...arguments].map(i => i > 0 ? i <= 255 ? i : 255 : 0);
   return args.map(i => `0${i.toString(16)}`.slice(-2)).join('').toUpperCase();            
}
console.log(rgb(300,-10,215));