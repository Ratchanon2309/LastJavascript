// Object cloning
//Obj Ref, Obj Clonning AudioProcessingEvent(), {... x}, JSON
//
const obj1 = {
    person : 'Ratchanon' ,
    weight : 86
}

//const obj2 = obj1
//const obj2 = Object.assign({},obj1);
const obj2 = {... obj1};
obj2.weight = 75;
console.log(obj1);
console.log(obj2);
