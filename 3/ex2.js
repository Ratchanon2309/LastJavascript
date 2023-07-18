let values1 = ['Apple', 1, false];
let values2 = ['Fries', 2, true, 'Mars' ];
let values3 = ['Mars', 9, 'Apple'];

//let values1 = ['Pie', 3, false];
//let values2 = ['Fries', 3, true, ];
//let values3 = ['Mars', 9, 'Pie'];
let a =[];

for (let index = 0; index < values1.length; index++) {
    const i = values1[index];
    for (let index = 0; index < values2.length; index++) {
        const j = values2[index];
        if (i === j) {
            console.log("Values1 and Values2 : " , a = i )
        } 
        
        
    }
    
}
for (let index = 0; index < values1.length; index++) {
    const i = values1[index];
    for (let index = 0; index < values3.length; index++) {
        const k = values3[index];
        if (i === k) {
            console.log("Values1 and Values3 : " , a = i )
        } 
        
        
    }
    
}
for (let index = 0; index < values2.length; index++) {
    const j = values2[index];
    for (let index = 0; index < values3.length; index++) {
        const k = values3[index];
        if (j === k) {
            console.log("Values2 and Values3 : " , a = j )
        } 
        
        
    }
    
}