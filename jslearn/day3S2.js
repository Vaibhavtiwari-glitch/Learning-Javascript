// node jslearn/day3S2.js
const marvel_heros = ['thor','ironman','spiderman'];
const dc_heros = ['superman','batman','homelander'];
// marvel_heros.push(dc_heros);
/*
when we write push and try ushing a whole differnt
array into the new array it pushes the whole array
as an one value in the new array in this case 
the whole dc heros array become one value in the 
marvel heros array at the last index so thats why
we need to write this kind of things to acess the 
value of array which is inside the array
*/
//console.log(marvel_heros[3][1]);
// let heros = marvel_heros.concat(dc_heros);
// console.log(heros);
/* after the concat we need to store in the another
variable so that it gives us the new array after concating
it dosen't affect any of this exisiting arrays */
const allheros = [...marvel_heros,...dc_heros];
console.log(allheros);
let s1 = 12;
let s2 = 222;
let s3 = 432;
console.log(Array.of(s1,s2,s3));
// -> [12,222,432]
console.log(Array.from('hello');
// -> ['h','e','l','l','o']
