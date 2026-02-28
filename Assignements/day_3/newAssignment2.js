
// ASSIGNMENT 2:
// -------------
// Student Performance Dashboard

// You are working on a college result analysis system.

// Test Data:
// const students = [
//   { id: 1, name: "Ravi", marks: 78 },
//   { id: 2, name: "Anjali", marks: 92 },
//   { id: 3, name: "Kiran", marks: 35 },
//   { id: 4, name: "Sneha", marks: 88 },
//   { id: 5, name: "Arjun", marks: 40 }
// ];

// Tasks:
//     1. filter() students who passed (marks ≥ 40)
//     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D

//    3. reduce() to calculate average marks
//    4. find() the student who scored 92
//    5. findIndex() of student "Kiran"

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
 //1. filter() students who passed (marks ≥ 40)
 const pass=students.filter((passed)=>passed.marks>39)
 console.log(pass)

 //     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D
 const show=students.map((grade)=>{
    if(grade.marks>=90){
     grade.show="A"
     return grade
    }
    else if(grade.marks>=75){
         grade.show="B"
         return grade
    }
    else if(grade.marks>=60){
    
       grade.show="C"
     return grade
    }
    else{
    
        grade.show="D"
     return grade
    }
 })
 console.log(show)

 //    3. reduce() to calculate average marks
 let avg=students.reduce((total,score)=>total+score.marks,0)
 avg=avg/students.length
 console.log(avg)

 // 4. find() the student who scored 92 
 const value=students.find(score=>score.marks==92)
 console.log(value)

 // 5. findIndex() of student "Kiran"
 const ind=students.findIndex(index=>index.name=="Kiran")
 console.log(ind) 
