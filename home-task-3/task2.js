function ellipsis(string, max){
    return (string.length > max) ?
    string.slice(0, max - 1) + '…' : string;
}
    
ellipsis("Today is rainy Sunday", 15)