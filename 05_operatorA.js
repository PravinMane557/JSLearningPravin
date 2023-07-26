

console.log('------------------Step1------------------');

function squareOfWordLength (arg1){
    var length=arg1.length
    var result=length*length
    return result
}


var res = squareOfWordLength ('JavaScript')
console.log(`Square of length of word "JavaScript" -${res}`);
var res = squareOfWordLength ('Google Chrome')
console.log(`Square of length of word "Google Chrome" -${res}`);
var res = squareOfWordLength ('Developer Smart')
console.log(`Square of length of word "Developer Smart" -${res}`);

console.log('------------------Step2------------------');
var step2 = function(string){
    var stringLength=string.length
       var words=string.split(' ')
       var totalNoOffWords=words.length
       var result = stringLength/totalNoOffWords
       return result
}
console.log('------------------step 2.1------------------');
var result = step2 ('I am Angular Developer')
console.log(`string lenth divided by total no of words gives result - ${result}`);

var step2 = function(string){
    var stringLength=string.length
       var words=string.split(' ')
       var totalNoOffWords=words.length
       var result = stringLength*totalNoOffWords
       return result
}
console.log('------------------step 2.2------------------');
var result = step2 ('I am Angular Developer')
console.log(`string lenth multiplied by total no of words gives result - ${result}`);