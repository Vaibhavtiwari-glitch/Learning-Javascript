// node jslearn/day5S4.js
function chai(){
    console.log('dc motor');
}
chai();
/* IIFE = immediately invoked function expressions
we use it in the case where we have made nested functions
so in that type of cases sometimes due to the parent
the values in the child function may be altered 
we call it here it gets polluted because of parent
or global scope so to prevent that we write this so
when we write this it runs immediately and we are 
now protected from that pollution
we write it as given below
*/
// IIFE example
(function coda (){
    console.log('kaa re');
})();
//arrow function 
( (name , fshsh ) =>{
    console.log('kaa re ' + name + fshsh);
}) ('vaibhav', "hegwughg")


// 1st () -> wraps the whole function in it it carries
//the whole function defination
// 2nd () -> it executes as we call the function