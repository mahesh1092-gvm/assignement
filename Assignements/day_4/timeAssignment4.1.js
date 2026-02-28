// 1.Exam portal simulator:
// -----------------------------
// When a student submits an exam:

//         Immediately show: “Exam submitted successfully”
//         After 2 seconds → show: “Evaluating answers…”
//         After 4 seconds → show: “Result: Pass”


console.log("Exam submitted successfully")
setTimeout(()=>{
    console.log("evaulating exam")
},2000)
setTimeout(()=>{
    console.log("result:pass")
},4000)

