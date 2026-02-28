// 4.find the smallest element in marks array
let marks=[90,78,65,98]
let low=marks[0];
for(let i=1;i<marks.length;i++)
{
if(marks[i]<low) 
   // 78  < 90
{   // comparing current marks with current low marks and curr marks smaller than low
     
    low=marks[i];
    //updating low marks
}
}
console.log(low)   
