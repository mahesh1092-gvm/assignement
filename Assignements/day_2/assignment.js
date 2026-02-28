/*1. Insert new Emp at 2nd position
2. Remove an emp with name "Kiran"
3.Change the last mark 95 to 75 of emp  "Sneha"
*/
let employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];
//1q  Insert new Emp at 2nd position
employees.splice(1,0,{   // at index 1... deleting 0 employees and adding 1 employee "mahesh"
    eno: 108,
    name: "mahesh",
    marks: [58, 90, 58],
})
console.log(employees)
//2q  Remove an emp with name "Kiran"

        // if index is known 
        // employees.splice(4,1)
         // console.log(employees)

// if index is not known 
for(let i in employees)
{
  if(employees[i].name=="Kiran") // comparing if any employee name is kiran
  {                              // if name is kiran.....deleting employee kiran
    employees.splice(i,1);
    break;
  }
}
console.log(employees)

//3q Change the last mark 95 to 75 of emp  "Sneha"
//  sneha is at index 3...now we calling marks of sneha and updating index 2 marks by deleting 1(previous marks)

employees[3].marks.splice(2,1,75)
console.log(employees)


        // or if sneha index is not known
// for(let i in employees){
//   if(employees[i].name=="Sneha")
//   {
//     employees[i].marks.splice(2,1,75)
//   }
// }
// console.log(employees)



