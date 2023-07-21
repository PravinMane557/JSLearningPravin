
function data(num1, num2){
    console.log('My name is Pravin');
    console.log('i am technical man');
    console.log('before swap==>', 'num1-', num1,'num2-', num2);
    var tam=num1
    num1=num2
    num2=tam
    console.log ('after swap==>', 'num1-', num1, 'num2-', num2)
}
var num1=12
var num2='null'
var num3=225
data(num1,num2, num3);
console.log('-----------------------------');
 var love=null
 console.log(typeof love);

 console.log('----------------------------------------------------------------------------------------');

 function addition(arg1, arg2, arg3) {
          console.log('value of-', arg1, arg2, arg3);
         result= arg1 + arg2 + arg3
         console.log('Result of Sum-',result);
         console.log('--------------------------------------------');
 }
 addition(10, 20, 52)
 addition(-20,562,-200025142)
 addition('rahul', 20, 2)