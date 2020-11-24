//Write a function that takes in an array of numbers and then outputs the average
var  average = arr => arr.reduce( ( t, y ) => t + y, 0 ) / arr.length;  //created a function, used the reduce method to produce a single value
//using the array.length method to count the array 
    
const result1 = average([1, 4, 7]);
const result2 = average([10, 5]);
const result3 = average([1.5, 3, 2.5, 1]);
console.log(result1,result2,result3);
//console log the results 