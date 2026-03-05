// node jslearn/day3S3.js
// object literals

const symb = Symbol('key1');
const user = {
    name : 'vaibhav',
    'full name' : 'vaibhav tiwari',
    age : 19,
    energy : 'supreme power',
isloggedin : true,
[symb] : 'mykey1'
/* 
we write the symbols like this cause if we dont 
it will act like normal key whose type will be 
obviously string but using symbols like this 
will be treated as symbol key.
*/
};
user['fullname'] = 'Vaibhav Tiwari';
// Object.freeze(user);
// console.log(user)
// console.log(typeof user[symb]);
// console.log(user['full name']);
user.man = function(){
    console.log('i am a man');
}
user.this = function(){
    console.log(`my name is ${this.name}`);
}
console.log(user.this());