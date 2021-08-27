
const obj1 = { a:2, b:2};
const obj2 = { a:1, c:3};
function extend(){
const obj3 = {...obj2,...obj1};
console.log(obj3);
}

console.log(extend);
//const returnedTarget = Object.assign(obj1, obj2 );



console.log(returnedTarget);

const obj1 ={a:2, b:2, c:5};
const obj2 ={a:1, c:3};
undefined
const obj3 ={...obj1,...obj2};
undefined
obj3
//{a: 1, b: 2, c: 3}