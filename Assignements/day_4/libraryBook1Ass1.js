// Problem Statement: Library Book Management System
// -------------------------------------------------
// Objective : Create a Book class and use it to manage a collection of books in a library.

// Requirements:
//   Create a Book class with the following:

//   Properties:
//       title (string)
//       author (string)
//       pages (number)
//       isAvailable (boolean, default: true)


//   Methods:
//       borrow() - Marks the book as not available
//       returnBook() - Marks the book as available
//       getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
//       isLongBook() - Returns true if pages > 300, false otherwise




//   1. Create at least 5 book objects using the class:
//       Example: "Harry Potter", "1984", "The Hobbit", etc.


//   2. Perform the following operations:

//       i. Display info of all books
//       ii. Borrow 2 books and show their availability status
//       iii. Return 1 book and show updated status
//       iv. Count how many books are "long books" (more than 300 pages)
//       v. List all available books
class Book{
    title;
    author;
    pages;
    isAvailable;

constructor(title,author,pages,isAvailable){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.isAvailable=isAvailable;
}
borrow(){
    return this.isAvailable=false
}
returnBook(){
    return this.isAvailable=true
}
getInfo(){
    return (`the book ${this.title} written by ${this.author} consists of ${this.pages} pages and  Availability status:${this.isAvailable}`)

}
isLongBook(){
    if(this.pages>300){
        return false
    }
    else{
        return true
    }
}
}
//   1. Create at least 5 book objects using the class:
//       Example: "Harry Potter", "1984", "The Hobbit", etc.

// creating object
let b1=new Book("Future","Harry potter",400,true)
let b2=new Book("Shepard","Alchemist",498,false)
let b3=new Book("World","Mahesh",200,true)
let b4=new Book("Animal farm","Orwell",589,true)
let b5=new Book("Guide","Narayan",176,true)
//  printing information of books
// console.log(b1)
// console.log(b2)
// console.log(b3)
// console.log(b4)
// console.log(b5)

//  i. Display info of all books
console.log(b1.getInfo())
console.log(b2.getInfo())
console.log(b3.getInfo())
console.log(b4.getInfo())
console.log(b5.getInfo())

//       ii. Borrow 2 books and show their availability status
b2.borrow()
console.log("Let the ",b2.title , "is this book Available :",b2.isAvailable)
b4.borrow()
console.log("Let the ",b4.title , "is this book Available :",b4.isAvailable)

//       iii. Return 1 book and show updated status
b1.returnBook()
console.log("let book",b1.title , " after returning ...Updated status is:",b1.isAvailable )

//       iv. Count how many books are "long books" (more than 300 pages)
let array=[b1,b2,b3,b4,b5]  //here we stored all books in array 
let count=0
const data=array.filter((page)=>page.pages>300)  // here we used filter method to filter books having pages more than 300
console.log(data)

//       v. List all available books
 const list=array.filter((books)=>books.isAvailable==true)
 console.log(list)
