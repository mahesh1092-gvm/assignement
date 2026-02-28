// 5. write a function that recieves 3 number args and return big number
function big(a,b,c)
{
    if(a<b)
    {
        if(b<c)
            {
            return c; // here c is bigger than b and a
            }

    else{
       return b; // here b is smaller compared to c and b is bigger compared to a
       }
    }
else {
     return a;// a is smaller compared to b and c

     }
}
let result=big(6,7,8)
 console.log(result)
