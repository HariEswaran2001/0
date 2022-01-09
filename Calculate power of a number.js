function powerOfNumber (base,exponential){
    var i, pow = 1;
    for (i = 0; i < exponential; i++){
        pow = pow * base;
    }
    return pow;
}