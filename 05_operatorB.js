


console.log(`----------------------------Step1----------------------------`);
console.log(`==================================================================`);
console.log(`----------------------------Step1.2----------------------------`);
var greaterNumer=function(){
var num1=10
var num2=-10
var result=num1>num2? 'The greter number between 10 & -10 is 10':'The greter number between 10 & -10 is -10'
console.log(result);
}
greaterNumer()

console.log(`----------------------------Step1.3----------------------------`);
var greaterNumer=function(){
    var num1=800
    var num2=899
    var result=num1>num2? 'The greter number between 800 & 899 is 800':'The greter number between 800 & 899 is 899'
    console.log(result);
    }
    greaterNumer()

    console.log(`----------------------------Step2----------------------------`);

    var isEvenOrOddNum = function (arg1){
               var result = arg1%2==0? `${arg1} is even`:`${arg1} is odd`
                console.log(result);
    }
    isEvenOrOddNum(29)
    isEvenOrOddNum(44)
    isEvenOrOddNum(0)
    isEvenOrOddNum(101)

    console.log(`----------------------------Step3----------------------------`);

    var wordLength = function (arg1){
               var length=arg1.length
              var result = length%2==0 ? `length of ${arg1} even`: `length of ${arg1} odd`
              console.log(result);
    }
    wordLength('JavaScript')
    wordLength('developer')
    wordLength('Google')

