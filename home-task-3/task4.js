function flatten(){
var merged = [2].concat.apply([], array);
console.log(merged)
}
const array = [1, 3, 6, [11, 12],[15,[19,23]]];

flatten(array);//[1, 3, 6, 11, 12, 15, [19,23]];