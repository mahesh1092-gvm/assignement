// ASSIGNMENT 3:
// -------------
// Employee Payroll Processor

// You are building a salary processing module in a company HR app.

// Test data:
// const employees = [
//   { id: 201, name: "Amit", salary: 45000, department: "IT" },
//   { id: 202, name: "Neha", salary: 60000, department: "HR" },
//   { id: 203, name: "Rahul", salary: 75000, department: "IT" },
//   { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
// ];

// Tasks:
//     1. filter() employees from IT department
//     2. map() to add:
//             netSalary = salary + 10% bonus

//     3. reduce() to calculate total salary payout
//     4. find() employee with salary 30000
//     5. findIndex() of employee "Neha"
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
//     1. filter() employees from IT department
const depart=employees.filter((dname)=>dname.department=="IT")
console.log(depart)

//     2. map() to add:
//             netSalary = salary + 10% bonus
const net=employees.map((netsalary)=>netsalary.salary*(110/100))
console.log(net)


//  3. reduce() to calculate total salary payout
const cal=employees.reduce((net,pay)=>net+pay.salary,0)
console.log(cal)


 //  4. find() employee with salary 30000
 const find=employees.find(net=>net.salary==30000)
 console.log(find)

 
 // 5. findIndex() of employee "Neha"
 const ind=employees.findIndex(index=>index.name=="Neha")
 console.log(ind)