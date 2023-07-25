function tuckIn(arr1,arr2) {
    let Arr = arr1.length/2;
    const b = ",";
    return arr1.slice(0,Arr)+b+arr2+b+arr1.slice(Arr);
    
}
console.log(tuckIn([1,10], [2,3,4,5,6,7,8,9]));
console.log(tuckIn([15,150], [45,75,35]));