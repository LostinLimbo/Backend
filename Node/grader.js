// Create a function to find the average of an array!

var arr1 = [21, 12, 32, 45, 54];
var arr2 = [90, 98, 89, 100, 100, 86, 94];
var arr3 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

function average(arr){
 var res = 0
 for(i = 0; i < arr.length; i++){
  res = res + arr[i];
 }
 res = res / (arr.length);
 return(Math.round(res));
}

console.log(average(arr1));
console.log(average(arr2));
console.log(average(arr3));