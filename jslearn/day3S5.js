// node jslearn/day3S5.js
const course = {
    coursename : 'complete js',
    price : '0',
    student : 'vaibhav'
}
const {student : stu} = course
// now we can use those keys directly
//and now instead of student i can use stu wow
// isko khete hai destructuring 
console.log(stu);