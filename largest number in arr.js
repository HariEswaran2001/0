var arr = [9,1,80,54,72,3,5,10];
var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
   if (largest < arr[i]) {
      largest = arr[i];
   }
}
console.log(largest);