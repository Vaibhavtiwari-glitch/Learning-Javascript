// node jslearn/day3S4.js

const tinder = new Object();//ye ek singelton object hai
const tonder = {}//ye ek singelton object nahi hai
tonder.id = '@kama';
tonder.name = 'kama';
//console.log(tonder);
const regular = {
email : 'vaibhavtiwari@gmail.com',
user : {
    name : 'vaibhav',
    surname : 'tiwari'
}
}
//console.log(regular['user']['surname']);
const obj1 = {
1: 'a',
2: 'b'
}
const obj2 = {
3: 'c',
4: 'd'
}
const obj3 = {...obj1,...obj2}// we did same in the arrays
console.log(Object.keys(tonder));
console.log(Object.values(tonder));
console.log(Object.entries(tonder));
console.log(obj3);
console.log(tonder.hasOwnProperty('islogged'));