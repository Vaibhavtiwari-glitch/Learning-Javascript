// node jslearn/day5S2.js
//nested scope

function one (){
    const username = 'vaibhav';

    function two (){
const website = 'youtube';
console.log(username);
    }
    //console.log(website)
    two();
}
//one();
/*
here what is happening we have created a function
in function so we are checking we can access the 
parent function things inside the child function
or not but we can use it bcoz children can take 
there parent icecream but parents cant take there 
childrens icecream it is something like that 
and we cannot use the things outside the block as we 
learnt earlier
*/

function add (num){
return num+2;
}
console.log(add(5));
const added = function (num){
    return num + 3;
}
let final = added(88);
console.log(final);