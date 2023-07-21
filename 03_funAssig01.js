console.log('--------------------no argument no parameter--------------------');
function mango(){
    console.log('angular developor');
    console.log('having knowledege of html, css, java, angular');
}
mango()

console.log('------------------------------------------------------------------------');
function cherry(){
     console.log('hello html');
     console.log('hello css');
}
cherry()
console.log('--------------------personal details--------------------');

function personalDetails(firstName, lastName, collageName){
console.log('first Name-', firstName );
console.log('Last Name-', lastName );
console.log('Collage Name-', collageName );
}

personalDetails('Pravin', 'Mane', 'NESS')
console.log('------------------------------Function with arg no return (Swap)------------------------------------');

function swap(a1, a2){
console.log('before swap-', a1, a2);
var temp=a1
a1=a2
a2=temp
console.log('after swap-', a1, a2);
}

swap('Virat','Anushka')
swap(1000,2000)
console.log('-----------------------Step 3------------------------');
function addThreeValues(a1,a2,a3){
console.log('before addition', a1,a2,a3);
var add=a1+a2+a3
return add
}
 
var addition = addThreeValues(10.23,600,40)
console.log('after addition-',addition);

var addition = addThreeValues('Hellow','Good','Morning')
console.log('after addition-',addition);

console.log('----------------------Bank Details-------------------------');

function bankDetails(bankName, accountNum, location, pinCode){
console.log('Bank Name-', bankName, 'Account No-', accountNum, 'Location-', location, 'PinCode-', pinCode);
}

bankDetails('CITI Bank', '3456782345', 'Pune', '431202')
bankDetails('Axis Bank', '7856782345', 'Pune', '441202')
bankDetails('HDFC Bank', '8956782345', 'Pune', '631202')