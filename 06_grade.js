function gradeCalculation (marks) {
    var string="string"
    marks=Number(marks)
    if (marks<=0 || marks>100 || marks==NaN || marks == undefined || marks == null || typeof marks == typeof string ) {
        console.log(`please Provide The Valid Marks`);
        return
     }

    if (marks>=90 && marks<=101) {
        console.log(`Fantastic marks ${marks} , your grade is A+`);
        return
    }
     if(marks>=75 && marks<90 ){
        console.log(`Excelent marks ${marks} your grade is A`);
        return
     } 
     if (marks>=50 && marks<75 ) {
        console.log(`good marks ${marks} your grade is B`);
        return
     } 
     if (marks>=35 && marks<50 ) {
        console.log(`marks is ${marks} your grade is C, Need Improvement`);
        return
     }

    else{
        console.log(`you are fail`);
    }
    
}

gradeCalculation(98)
gradeCalculation(80)
gradeCalculation(90)
gradeCalculation(0)
gradeCalculation(150)
gradeCalculation(-7)
gradeCalculation(35)
gradeCalculation(29)
gradeCalculation(64)
gradeCalculation(49)
gradeCalculation("91")
gradeCalculation('Eighty')
gradeCalculation(undefined)
gradeCalculation(null)


console.log(`----------------------------------Assignment 02----------------------------------`);

function  evenOrOdd(arg1) {
    if (arg1%2 == 0) {
        console.log(`no is even`);
    } else {
        console.log(`no is odd`);
    } 
}

evenOrOdd(45)
evenOrOdd(70)
evenOrOdd(67)
evenOrOdd(98)
console.log(`----------------------------------Assignment 03----------------------------------`);

function lengthString (arg2) {
    if (arg2.lenghth >= 10) {
        console.log(`yes`);  
    } else {
        console.log(`No`);
    }
    
}
lengthString(`JavaScript - ES6`)
