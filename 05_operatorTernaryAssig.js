console.log(`-------------------step1-------------------`);
function maleMarriageEligibility(gender,age,boyName){
   var result= age>=21 ? `Hey ${boyName} you are eligible for Marrige`:`Hey ${boyName} you are Not eligible for Marrige`
   console.log(result);
}
 maleMarriageEligibility('Male',25,'Billgates')
 maleMarriageEligibility('Male',17,'Stew Jobs')

 console.log(`-------------------step2-------------------`);
 function femaleMarriageEligibility(gender,age,girlName){
    var result= age>=18 ? `Hey ${girlName} you are eligible for Marrige`:`Hey ${girlName} you are Not eligible for Marrige`
    console.log(result);
 }
 femaleMarriageEligibility('female',16,'Jenifer')
 femaleMarriageEligibility('female',27,'Malinda Gates')


