 //function multiply(arr, n) {
 //   var product = 1;
 //   for (var i = 0; i < n; i++) {
 //       product *= arr[i];
 //   }
 //   return product;
 // }



const array = [3, 56, 25];

function sum(arr, n) {
  if(n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}

sum(array, 2);
