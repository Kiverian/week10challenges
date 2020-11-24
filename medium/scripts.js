//create a function that returns the index of an array, otherwise return '-1'
var search = function(num,arr){ //created the function
    for (let i= 0; i <= arr.length; i++){//for loop to run the array 
        if (num === arr[i]){
            return arr.indexOf(num);// return the index of the array if found
        }
        else{
            console.log(-1);// if the array isn't found, return the value pf '-1'
        }
    }
}
console.log(search(5, [0,0,3,5]));
