function StandardDeviation(numbersArr) {
   
    var total = 0;
    for (var key in numbersArr)
       total += numbersArr[key];
    var meanVal = total / numbersArr.length;
    
 
    var SDprep = 0;
    for (var key in numbersArr)
       SDprep += Math.pow((parseFloat(numbersArr[key]) - meanVal), 2);
    var SDresult = Math.sqrt(SDprep / numbersArr.length);
    
    alert(SDresult);
 
 }
 
 var numbersArr = [10, 11, 12, 13, 14];
 StandardDeviation(numbersArr);