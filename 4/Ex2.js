function filterArray(arr1) {
    let A = [];
    for (let index = 0; index < arr1.length; index++) {
        if (typeof arr1[index] === 'number' && !isNaN(arr1[index])) {
            A.push (arr1[index])
        }
        
    }
    return A;
}
console.log(filterArray([1,2,"a","b"]));
console.log(filterArray([1,"a","b",0,15]));
console.log(filterArray([1,2,"aasf","1","123",123]));
