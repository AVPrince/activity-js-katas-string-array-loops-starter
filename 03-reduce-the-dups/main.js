/*
  REDUCE THE DUPS

  1. Given the already-sorted array `[1, 1, 2, 3, 3, 4]`, write
     a WHILE loop which creates a copy of this array, except
     with the duplicates removed.
  2. Display both arrays as strings on the page.

*/

const redundantArray = [1, 1, 2, 3, 3, 4]
let newArray = []

let index = 0;
while (index < redundantArray.length)  {
  // console.log(redundantArray[index]);
    if (newArray.includes(redundantArray[index]) === false) {
      newArray.push(redundantArray[index])
    }
  index = index +1;
}
console.log(redundantArray);
console.log(newArray);

// count = 0 
// while (count < redundantArray.length) {
//   console.log(count, (redundantArray[count]), redundantArray[count], count);
//   superArray.push(redundantArray[count])
//   if (!superArray.includes(redundantArray[count])) {
//     superArray.push(redundantArray[count])
//   }
//   count = count+1;
// }

// console.log(superArray);