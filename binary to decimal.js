var binary = 101101;
var power = 0;
var a = 0;

while (binary > 0) {
    var reminder = binary % 10;
    a = a + (parseInt(reminder * Math.pow(2, power)));
    power++;
    binary = parseInt(binary / 10);
}
console.log(a)