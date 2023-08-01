


var voteEligibility = function (age){

    if (age>=120 || age<=0 || age==undefined || age==null) {
        console.log(`invalid input`);
        
    } else {
        if (age>=18 ) {
            console.log(`you are eligible for vote`);
            
        } else {
            console.log(`you are not eligible for vote`);
        }
        
    }
}

voteEligibility(45)
voteEligibility(17)
voteEligibility(8)
voteEligibility(20)
voteEligibility(-10)
voteEligibility(200)
voteEligibility(0)
voteEligibility(undefined)
voteEligibility(null)







