function reverseIt(data){
    if(typeof data === typeof({}) || typeof data === typeof(true)){
        return data;
    }
    if(typeof data === typeof(1)){
        return +String(data).split('').reverse().join('');
    }
    return String(data).split('').reverse().join('');
}