let GCD;
const num1 = prompt("Enter the first positive integer: ");
const num2 = prompt("Enter the second positive integer: ");
for (let i = 1; i <= num1 && i <= num2; i++){
    if (num1 % i == 0 && num2 % i == 0){
        GCD = i;
    }
}
console.log("Greatest Common Divisor is ${GCD}")