// node jslearn/day4S2.js
function cartpricing (...num1) {
return num1;
}
let calculate = cartpricing(200,300,400,84783);
// let result = 0 ;
// for(let i = 0;i<calculate.length;i++){
//     result = result + calculate[i];
// }
// console.log(result);
//console.log(cartpricing(200,300,400));
const user = {
    username : 'vaibhav',
    price : 999,
}
function handelobject(anyobject){
console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`)
}
handelobject(user);
/* 
here we made a object user and then made a function 
in that we gave parameter anyobject so when we called
the function and gave user as an agrument which is 
our object so now in console.log anyobject.username is
just an user.username so as the user object internal
value changes everything changes accordingly good
*/
const myarr = ['apple','mango','guava','banana'];
function grabing(e){
console.log(`my favourite fruits are ${e}`)
}
grabing(myarr);