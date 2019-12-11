// You are implementing a command-line version of the Paint app. Since the command line doesn't 
// support colors, you are using different characters to represent pixels. Your current goal is 
// to support rectangle x1 y1 x2 y2 operation, which draws a rectangle that has an upper left corner 
// at (x1, y1) and a lower right corner at (x2, y2). Here the x-axis points from left to right, and the y-axis points from top to bottom.

// Given the initial canvas state and the array that represents the coordinates of the two corners, return the canvas state after the operation is applied. 
// For the details about how rectangles are painted, see the example


function drawRectangle(canvas, rect) {
   let [colStart, rowStart, colEnd, rowEnd] = rect;
   for (let row = rowStart; row <= rowEnd; row++) row === rect[1] || row === rect[3] ? canvas[row][colStart] = `*` : canvas[row][colStart] = `|`;
   for (let row = rowStart; row <= rowEnd; row++) row === rect[1] || row === rect[3] ? canvas[row][colEnd] = `*` : canvas[row][colEnd] = `|`;
   for (let col = colStart; col <= colEnd; col++) col === rect[0] || col === rect[2] ? canvas[rowStart][col] = `*` : canvas[rowStart][col] = `-`;
   for (let col = colStart; col <= colEnd; col++) col === rect[0] || col === rect[2] ? canvas[rowEnd][col] = `*` : canvas[rowEnd][col] = `-`;
   return canvas;
}

console.log(drawRectangle([["a","a","a","a","a","a","a","a"], 
                           ["a","c","a","a","a","a","a","a"], 
                           ["a","a","a","a","a","a","a","a"], 
                           ["b","b","b","b","b","b","b","b"], 
                           ["b","b","b","b","b","b","b","b"]], [1, 1, 4, 3]));