// Assignment 2: Online Course Name Processor
// ------------------------------------------
// Scenario : You are preparing a course list for display on a website.

// Test data:
// const courses = ["javascript", "react", "node", "mongodb", "express"];


// Tasks:
//     1. filter() courses with name length > 5
//     2. map() to convert course names to uppercase
//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

//     4. find() the course "react"
//     5. findIndex() of "node"

const courses = ["javascript", "react", "node", "mongodb", "express"];
//  1. filter() courses with name length > 5
const length5=courses.filter((name)=>name.length>5)
console.log(length5)


//  2. map() to convert course names to uppercase
const upper=courses.map((element)=>element.toUpperCase())
console.log(upper)


    // 3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
let single=courses.reduce((acc,ele)=> acc+ele)
console.log(single)


//  4. find() the course "react"
const find=courses.find(value=>value=="react")
console.log(find)


//  5. findIndex() of "node"
let found=courses.findIndex(value=>value=="node")
console.log(found)

