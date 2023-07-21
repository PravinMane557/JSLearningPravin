// Function with no argument and no return value
function show(){
    console.log('My name is Gajanan');
    console.log('I am Technical lead');
    console.log('My tech skill is - Java + Angular + React + DevOps + ');
}
show(); // Function Invocation

// Function with argument and no return value 
function checkType(value){ // var value;
    console.log('Value is', value);
    console.log('Type is: ', typeof value);
    console.log('-------------------------');
}
checkType(100);
checkType("GK");
checkType(true);
checkType(undefined);
checkType(null);
checkType();

function addition(arg1, arg2, arg3){

    console.log('before addition', arg1, arg2, arg3);
    var result=arg1 + arg2 + arg3
     return result
}

var res= addition (10,20,30)
console.log('result is', res);

var res2=addition(-56, 239, 677)
console.log('result is', res2); 

var res=addition('Gk', 'pune', 88) 
console.log('result is', res);

function noargument(a1,a2,a3,a4,a5){
var addition = a1+a3
    return addition
}

var display=noargument(10,5,3,4,5)
console.log(display);
