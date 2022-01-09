var start = 250;
var end = 280;


for (i = start; i <= end; i++) {
    var a = i;
    var temp = 0;
    while (a > 0) {
        b = a % 10;
        temp = temp + (b * b * b);
        a = parseInt(a / 10);

    }
    if (temp == i) {
        console.log(i + " is an ArmstrongNumber")
    } else {
        console.log(i + " is not an ArmstrongNumber")
    }
}