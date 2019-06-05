function add(){
    let sum = 0
 
    for(let i = 0; i < arguments.length; i++){
        sum += parseFloat(arguments[i]);
    }
    return sum;
 }

function multiply(){
    var multiplication = 1;
 
    for(let i = 0; i < arguments.length; i++){
        multiplication *= parseFloat(arguments[i]);
    }
    return multiplication;
}
