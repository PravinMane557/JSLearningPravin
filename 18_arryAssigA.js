

const arrayFruits = ['Banana', 'Orange','Apple','Mango','Water melon']
console.log(`------------------------------First and last Element--------------------------------`);
console.log(arrayFruits[0,arrayFruits.length-1]);

console.log(`------------------------------Insert First Element--------------------------------`);
let insert = arrayFruits.unshift("Papaya")
console.log(arrayFruits);

console.log(`------------------------------Insert Last Element--------------------------------`);
let insertLast = arrayFruits.push('Banana')
console.log(arrayFruits);

console.log(`------------------------------Remove Mango--------------------------------`);
let remove = arrayFruits.splice(4,1)
console.log(arrayFruits);

console.log(`------------------------------Insert Last Element--------------------------------`);
let addPanLast= arrayFruits.push('Pineapple')
console.log(arrayFruits);

console.log(`------------------------------Insert Dragon Fruit--------------------------------`);
let insertDragon = arrayFruits.splice(4,0,'DragonFruit')
console.log(arrayFruits);

console.log(`------------------------------Replace orange with kiwi--------------------------------`);
let replaceOrange = arrayFruits.splice(2,1,'Kiwi')
console.log(arrayFruits);

console.log(`------------------------------Elements from 1 to 4--------------------------------`);
for (let index = 1;index <= 4; index++) {
    const result = arrayFruits[index];
    console.log(result);
    
}

console.log(`------------------------------Elements last 3--------------------------------`);
arrayFruits.splice(0,5)
console.log(arrayFruits);









