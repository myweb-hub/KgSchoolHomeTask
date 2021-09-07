function flatten(){
var merged = array
//.concat.apply([], array);
for(i=0; i > 1; i++)
var merged = [i];
    console.log(merged)
}
const array = [1, 3, 6, [11, 12],[15,[19,23]]];

flatten(array);//[1, 3, 6, 11, 12, 15, [19,23]];