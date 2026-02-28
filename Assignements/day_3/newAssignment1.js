// ASSIGNMENT 1:
// -------------
// You are building a shopping cart summary for an e-commerce website.

// Test Data : 
// const cart = [
//   { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
//   { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
//   { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
//   { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
// ];

// Tasks:
//     1. Use filter() to get only inStock products
//     2. Use map() to create a new array with:  { name, totalPrice }
//     3. Use reduce() to calculate grand total cart value
//     4. Use find() to get details of "Mouse"
//     5. Use findIndex() to find the position of "Keyboard"

const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
//     1. Use filter() to get only inStock products
const p=cart.filter((products)=>products.inStock)
console.log(p)               //printing whose products instocks are true


// 2. Use map() to create a new array with:  { name, totalPrice }
const z=cart.map((element)=>({
  name : element.name,
 totalPrice : element.price*element.quantity   // we know total price=price * quantity
}))
console.log(z)

//     3. Use reduce() to calculate grand total cart value
let total=cart.reduce((acc,element)=> acc +element.price*element.quantity ,0) // here initially accumulator value is 0
console.log(total)

//  4. Use find() to get details of "Mouse"
let data=cart.find(details=>details.name=="Mouse")
console.log(data)        

//  5. Use findIndex() to find the position of "Keyboard"
let position=cart.findIndex(item=>item.name=="Keyboard")
console.log(position)
