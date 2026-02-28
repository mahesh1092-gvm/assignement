// 7. write  function that recieves an array and search element as args and returns the index 
// of that search element as args and returns the index of that search element in the array, it should return 'not found'
// when search element not found
let index =function(array,search){
    for(let i=0;i<array.length;i++){
        if(array[i]==search){
            return i;
            // returns index value
        }
      }
    {
            return "not found";
    }
}
let numbers=[10,20,30,40,50];  // initializing array
// calling the function
let result=index(numbers,40)
//              array, search element
console.log(result)
