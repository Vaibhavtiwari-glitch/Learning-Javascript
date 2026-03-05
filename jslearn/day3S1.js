// node jslearn/day3S1.js
// console.log(arr.length);
// console.log(typeof arr);
// array methods
const arr = [0,1,2,3,4,5];
arr.push(8); // adds the value at the last 
arr.pop(); // removes last value of the array
 arr.unshift(99); // adds the value at the first
 arr.shift(); // removes the the first value 
console.log('a',arr);
console.log(arr.splice(1,4)); 
console.log(arr)
/* in the slice when we give the index from some
starting point to some ending point so its output 
is simple it gives the part of an array from the 
starting point to the ending point but there are 
2 key points to mark which is 1) it gives the copy
of the sliced array means it dosent change the 
original array and it dosn't include the last index 
we give to slice 
and splice does the same thing but it include the
last index and it changes the original array */