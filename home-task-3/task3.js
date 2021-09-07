function flatten(){
    if(typeof Array.isArray()){
        var merged = array.concat.apply([], array); 
    console.log(merged)
        }
    else{
        return array;
}
return flatten();
    }
array.forEach(flatten)
const array = [1, 3, 6, [11, 12],[15,[19,23]]];

    uniqueArray(array); //[1, 1, 2, 3, 3, 4, 4, 5]
