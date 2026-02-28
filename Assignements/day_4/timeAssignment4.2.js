// 2.OTP Countdown Simulator (Console App)
// ------------------------------------
        
//         Simulate OTP sending flow in Node.js:
        
//         Show “OTP Sent Successfully”
        
//         Start 10-second countdown
        
//         Allow resend only after countdown ends
console.log("OTP sent successfully")
let s=5;
let intervalId=setInterval(()=>{
    s--;
    console.log(`otp can resend after ${s} secs`)
    if(s==0){
        console.log("resend otp")
        clearInterval(intervalId)
    }
},1000)

