let a = prompt('Enter the first number: ');
let b = prompt('Enter the second number: ');

let temp = a;
a = b;
b = temp;

console.log('The value of a after swapping: ${a}');
console.log('The value of b after swapping: ${b}');