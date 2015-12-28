function sum (a,b){
    if(b === undefined){
        return function(b){
            return a + b;
        }
    }
    return a + b;
}