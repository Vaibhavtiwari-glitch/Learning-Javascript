// node jslearn/day4S1.js
function name(){
    console.log('vaibhav');
}
//name();
 function addition(num1,num2){
// let answer = num1 + num2;
// return answer;
return num1+num2;
}
const answer = addition(4,6);
//console.log(answer);
/*
 jab function banate hai tab jo bhi bracket me 
 likhte hai vo hota hai parameters and jab call
 karne ke baad bracket me likhte hai vo hota hai  
 arguments.
*/
function loginusermessage(username){
    if(username == undefined){
        console.log('enter a valid username');
        return ;
    }
return`${username} just logged in`
}
let username =  loginusermessage('vaibhav');
 console.log(username);
 /* 
 here the return is doing the very imp job.
 when there is undefined value in the argument
 for example there is nothing provided by the user
 so it is undefined so in that case the if statment 
 runs and it gives the msg to enter valid username
 and after that return means after return nothing is
 gonna work so if if statment runs at the end because 
 of return nothing else will run and if there is a 
 valid username the if statmet will not run and 
 then everything runs just fine
 */
/*
khali function ko call karne se kaam nahi chalta
 usko use karne ke liye uski value store karna
 padta hai agar apne nahi karenege toh function 
 kaam toh karega lekin usko console ye sab nahi
 karenege toh kuch pata he nahi chalega
 */ 