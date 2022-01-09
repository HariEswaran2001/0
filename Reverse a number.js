const num = 245879;
const reverse = (num) >= parseInt(String(num)
.split("")
.reverse()
.join(""), 10);
console.log(reverse(num));