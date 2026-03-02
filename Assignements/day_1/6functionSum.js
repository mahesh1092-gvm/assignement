//6.write a function that recieves array as arg and return their sum
function totalSum(numbers){
let sum=0;
for(let i=0;i<numbers.length;i++){
    
    sum=sum+numbers[i];
}
return sum;
}
// calling the function totalSum and storing in result variable
let result=totalSum([10,20,30]) 

 console.log(result)
// output 60
