function checkLeapyear(year){
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
        console.log("It is a leap year");
    }
    else{
        console.log("It's not a leap year");
    }
}

const year = prompt('Enter a year: ');
checkLeapyear(year);