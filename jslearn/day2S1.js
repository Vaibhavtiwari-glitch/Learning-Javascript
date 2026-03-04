// node jslearn/day2S1.js
const name = 'vaibhav ';
const repoCount = 50;
//console.log(name + repoCount);
//console.log(`${name.toUppercase}yeah that is my name this is my count`);
const gamer = new String('vaibhav-tiwari');
// console.log(gamer.length);
// console.log(gamer.toUpperCase());
// console.log(gamer.charAt(2));
// console.log(gamer.indexOf('i'));
const newstr = gamer.substring(0,5);
console.log(newstr);
const anotherstr = gamer.slice(-13,5);
console.log(anotherstr);
const trimmer = '      csjnsvs      ';
console.log(trimmer.trim());
const replace = 'https://hitesh.com/hitesh%20choudhary';
const replaced = replace.replace('hitesh','vaibhav')
// console.log(replaced);
// console.log(replace.includes('hitesh'));