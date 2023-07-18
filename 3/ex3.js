function indexMultiplier(a) {
let c = 0;
    for (let index = 0; index < a.length; index++) {
     c += a [index] * index; 
   
    
}
return c;
}
console.log(indexMultiplier([1,2,3,4,5])); //40
console.log(indexMultiplier([-3,0,8,-6])); //2