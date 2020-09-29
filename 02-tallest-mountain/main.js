/*
  TALLEST MOUNTAIN

  1. From scratch, create an array containing a bunch of numbers representing
     the heights of various mountains.
  2. Write a WHILE loop which identifies the height of the tallest of the
     available mountains in the array.
  3. Display the tallest height value on the page.
*/

// YOUR CODE HERE
let mountainHeights = [100, 1000, 1500, 2000]
let maxNumber = 0;

let index = 0;
while (index < mountainHeights.length) {
   // console.log(mountainHeights[index]);
   if (maxNumber < mountainheights[index]) {
      maxNumber = mountainHeights[index]
   }
   index = index +1;
}
console.log(maxNumber);



// mountainHeights.reduce(function()){
//    console.log(Math.max(mountainHeights));
// }