



let sbiBank = {
                bankName:'SBI Bank',
                location:'Shagun Reality, Ulwe, New Mumbai',
                accountNo:'123456789',
                ifsc:'SBI0000123456',
                interestRate:'10%',
                showDetails:function(){
                    console.log(`Bank details are-${this.bankName},${this.location},${this.accountNo},${this.ifsc},${this.interestRate}`);
                }   
}

let axisBank = {
    bankName:'Axis Bank',
    location:'Shagun Reality, Ulwe, New Mumbai',
    accountNo:'123456789',
    ifsc:'axis0000123456',
    interestRate:'11%',
    showDetails:function(){
        console.log(`Bank details are-${this.bankName},${this.location},${this.accountNo},${this.ifsc},${this.interestRate}`);
    }
    
}

let hdfcBank = {
    bankName:'HDFC Bank',
    location:'Shagun Reality, Ulwe, New Mumbai',
    accountNo:'123456789',
    ifsc:'HDFC0000123456',
    interestRate:'12%',
    showDetails:function(){
        console.log(`Bank details are-${this.bankName},${this.location},${this.accountNo},${this.ifsc},${this.interestRate}`);
    }
    
}


let yesBank = {
    bankName:'YES Bank',
    location:'Shagun Reality, Ulwe, New Mumbai',
    accountNo:'123456789',
    ifsc:'YES0000123456',
    interestRate:'13%',
    showDetails:function(){
        console.log(`Bank details are-${this.bankName},${this.location},${this.accountNo},${this.ifsc},${this.interestRate}`);
    }
    
}

sbiBank.showDetails()
axisBank.showDetails()
hdfcBank.showDetails()
yesBank.showDetails()










