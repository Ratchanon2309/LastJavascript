function countPosSumNeg(a) {
    let positiveNum = 0;
    let negativeNum = 0;

    for (let index = 0; index < a.length; index++) {
        if (a[index] > 0) {
            positiveNum++;
        } else if (a[index] < 0) {
            negativeNum += a[index];
        }
        
    }
    return a.length === 0?[]:
    [positiveNum,negativeNum];
}
console.log(countPosSumNeg([1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15]));
console.log(countPosSumNeg([92,6,73,-77,81,-90,99,8,-85,34]));
console.log(countPosSumNeg([91,-4,80,-73,-28]));
console.log(countPosSumNeg([]));