let n = parseInt("Enter the value: ");
console.log("Number of digits : "+ countDigit(n));
function countDigit(n)
{
    let count = 0;
    while (n != 0)
    {
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}