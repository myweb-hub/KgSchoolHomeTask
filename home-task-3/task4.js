function flatten(){
    array.forEach(flatten)
    if(typeof Array.isArray()){
        var merged = array.concat.apply([], array); 
    console.log(merged)
        }
    else{
        return ;
}
    }
const array = [1, 3, 6, [11, 12],[15,[19,23]]];
flatten(array);//[1, 3, 6, 11, 12, 15, [19,23]];
