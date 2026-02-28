//3.sum of marks
let marks=[90,78,65,98]
let sum=0;
for(let i=0;i<marks.length;i++)
{
    sum=sum+marks[i];
    //    0    90
    //    90   78
    //   168   65    in this way it works
}
console.log("sum of marks",marks, "is:",sum)