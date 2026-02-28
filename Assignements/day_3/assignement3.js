// Assignment 3: Student Marks List
// --------------------------------
// Scenario : You receive marks from an exam system.

// Test data:
// const marks = [78, 92, 35, 88, 40, 67];

// Tasks:
//     1. filter() marks ≥ 40 (pass marks)
//     2. map() to add 5 grace marks to each student
//     3. reduce() to find highest mark
//     4. find() first mark below 40
//     5. findIndex() of mark 92


const marks = [78, 92, 35, 88, 40, 67];

//     1. filter() marks ≥ 40 (pass marks)
const pass=marks.filter((passed)=>passed>39)
console.log(pass)        // printing marks greater or equaal to 40


//     2. map() to add 5 grace marks to each student
const add=marks.map((added)=>added+5)
console.log(add)               // 5 marks added to the Student Marks List


//     3. reduce() to find highest mark
let highest=marks.reduce((acc,ele)=>
{                              // printing highest marks from the Student Marks List

    if(acc>ele)
        ele=acc
    return ele
})
console.log(highest)


//     4. find() first mark below 40
 let find=marks.find(low=>low<40)
 console.log(find)          // printing the 1st below mark lessthan 40

 
//  /     5. findIndex() of mark 92
const ind=marks.findIndex(index=>index==92)
console.log(ind)            // printing the index of marks 92 in the marks list



