// //Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
// const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
//     2. map() to convert all temperatures from Celsius → Fahrenheit
//     3. reduce() to calculate average temperature
//     4. find() first temperature above 40
//     5. findIndex() of temperature 28


const temperatures = [32, 35, 28, 40, 38, 30, 42];


//1.q   filter() temperatures above 35
let t= temperatures.filter( (temp)=> temp>35) // temp > 35 are filtering
console.log(t)


//2. map() to convert all temperatures from Celsius → Fahrenheit
let  fahrenheit=temperatures.map( ( temp)=> temp*(9/5)+32) // modifing to fahrenheit
console.log(fahrenheit)


//3.reduce() to calculate average temperature
let avg=temperatures.reduce( (acc,ele)=> acc+ele )
avg= avg/temperatures.length
console.log(avg)


//4.find() first temperature above 40
let first=temperatures.find(element=> element>40)
console.log(first)


//5.findIndex() of temperature 28
let find=temperatures.findIndex(element=>element==28 )
console.log(find)


