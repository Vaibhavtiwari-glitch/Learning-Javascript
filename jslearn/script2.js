/* "use strict"; as we write this the engine understands
that we are using the newer version of js */
//alert('hello') we are using node js not browser
// let name = 'vaibhav';
// let age = 19;
// let isavailable = false;
// console.table([name,age]);
// console.log(typeof null)
//video 6 chai aur code
// let score = 'vaibhav';
// console.log(typeof score);
// console.log(typeof (score));

// let valueinnumber = Number(score);
// console.log(typeof valueinnumber);
// console.log(valueinnumber);

/* when we convert a number it converts easily
but as we try to convert string into a number it will 
give us NAN but keep in mind that the type of NAN 
is still a number so if you see the typeof is will
show us number alright
in case of null it shows 0
incase of true --> 1 and for false it is 0
and for undefined it is NAN again so the point is 
when we will work with databases and we get output 
such as NAN 0 1 this kind of wierd output which we feel
should not be the output of this then we should 
understand this might be the problem it not a problem
btw but this is what it is

*/
// let loggedin = 0;
// let converter = Boolean(loggedin);
// console.log(typeof converter)
// console.log(converter)
// let num = 18;
// let stringer = String(num);
// console.log(stringer);
// console.log(typeof stringer);

let x = 34;
let inc = x++;
console.log(inc);
let y = 13;
console.log(++y);