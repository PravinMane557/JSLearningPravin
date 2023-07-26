

var tcsEligibility= function (gradScore,hscScore,sscScore,candidateName){

    var result=(gradScore>=70 && hscScore>=80 && sscScore>=90)? `Congrats ${candidateName} you are eligible for TCS interview`:`${candidateName} Unfortunately you are not eligible for interview`
     console.log(result);

}

tcsEligibility(80,86,90,'Pravin')
tcsEligibility(70,65,55,'Anant')
tcsEligibility(80,86,90,'Mahesh') 

