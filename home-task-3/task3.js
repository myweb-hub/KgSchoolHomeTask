function uniqueArray(){
    array.sort((a, b) => a - b);
    console.log(array);
    
    }
    
    function removeDups(array){
        var uniqueArray = [];
        for(i=0; i < array.length; i++){
            if(uniqueArray.indexOf(array[i])=== -1) {
                uniqueArray.push(array[i]);
            }
        }
        return uniqueArray;
    }
    var removed = removeDups(array);
    console.log(removed);
    const array =[1,3,4,2,3,1,4,5];

    uniqueArray(array);
    