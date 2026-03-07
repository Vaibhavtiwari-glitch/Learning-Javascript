// node jslearn/day5S3.js

const user = {
    username : 'vaibhav',
    price : 999,
    welcome : function(){
        console.log(`${this.username}, welcome`);
        console.log(this);
    }
}
// user.username = 'kkaka'
 //user.welcome();
//console.log(this);
// function chai (){
//     let username = 'vaibhav';
//     console.log(this.username);
// }
// this is not used inside the function it is used
//inside the objects alright
// const chai  = ()=> {
//     let username = 'vaibhav';
//     console.log(this.username);
// }
// chai();
// arrow function
const addition = (num1 , num2) => {
    return num1+num2;
}
console.log(addition(5,6));
// this same thing can be done like this

const substaction = (num1,num2) => num1-num2;
console.log(substaction(9,6));
/*means we dont need to use return keyword and also 
we dont need those curly brackets 
this thing is called implicit return coz we didn't
write the return js automatically understood
here if we write (num1-num2) it is valid and we still
do not need to write return bcoz we are not using
curly brackets if we use the curly brackets we need to 
use the return keyword but in round brackets or no
brackets we do not need so this technique is used in
react so keep in mind 
*/ 