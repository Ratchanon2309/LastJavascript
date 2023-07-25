function numbersSum(a) {
let b = 0;
for (let index = 0; index < a.length; index++) {
    if (typeof a[index] === "number" && !isNaN(a[index])) {
    b += a [index]; 
    }
}
 return b;   
}
console.log(numbersSum([1,2,"13","4","645"])); //0
console.log(numbersSum([true,false,"123","75",])); //3
console.log(numbersSum([1,2,3,4,5,true])); //15