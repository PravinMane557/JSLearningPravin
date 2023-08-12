const arryNumbers =  [20,31,40,25,23,11,29,9,60,2,11]
console.log(`------------------------ step 01 ------------------------`);
console.log(arryNumbers.length);

console.log(`------------------------ step 02 ------------------------`);
console.log(arryNumbers[0]);
console.log(arryNumbers[arryNumbers.length-1]);

console.log(`------------------------ step 03 ------------------------`);
console.log(arryNumbers[arryNumbers.length-3]);

console.log(`------------------------ step 04 ------------------------`);
for (let index = 0; index < arryNumbers.length; index++) {
    const allNo = arryNumbers[index];
    if (allNo%2==0) {
        console.log(`even no in string is ${allNo}`);
    }
}

console.log(`------------------------ step 05 ------------------------`);
for (let index = 0; index < arryNumbers.length; index++) {
    const allNo = arryNumbers[index];
    if (allNo%2!=0) {
        console.log(`odd no in string is ${allNo}`);
    }
}

console.log(`------------------------ step 06 ------------------------`);
for (let index = 0; index < arryNumbers.length; index=index+2) {
    const element = arryNumbers[index];
    const addition = element+element
    console.log(addition);
}

console.log(`------------------------ step 07 ------------------------`);
for (let index = 1; index < arryNumbers.length; index=index+2) {
    const element = arryNumbers[index];
    const addition = element+element
    console.log(addition);
}
console.log(`------------------------ step 08 ------------------------`);

console.log(`------------------------ step 09 ------------------------`);
for (let index = 0; index < arryNumbers.length; index++) {
    const allNo = arryNumbers[index];
    if (allNo%5==0) {
        console.log(`multiplied by 5 no are ${allNo}`);
    }
}

console.log(`------------------------ step 10 ------------------------`);
let haikinahi = arryNumbers.includes(115)
console.log(haikinahi);

console.log(`------------------------ step 11 ------------------------`);
let haiki = arryNumbers.includes(23)
console.log(haiki);

console.log(`------------------------ step 12 ------------------------`);
let insert = arryNumbers.splice(3,0,55,66)
console.log(arryNumbers);

console.log(`------------------------ step 13 ------------------------`);
arryNumbers.splice(4,3)
console.log(arryNumbers);



