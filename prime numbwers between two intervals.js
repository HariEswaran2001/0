var start = 2;
var end = 10;
for (j = start; j <= end; j++) {
    var b = false;

    for (var i = start; i <= end; i++) {
        if (j != i) {
            if (j % i != 0) {
                b = true;
            } else {
                b = false;
                break;
            }
        } else {
            b = true;
            break;
        }
    }

    if (b == true) {
        console.log(j + " is prime number");
    } else {
        console.log(j + " is Not prime number");
    }
}