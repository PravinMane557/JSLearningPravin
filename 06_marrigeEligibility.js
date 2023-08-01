
function marrigeInput(gender, age) {
    var string='string'
    if (gender=='other' || typeof age == typeof string ) {
        console.log(`invalid input`);
        return
    }
    if (gender=='female' && age>=18) {
        console.log(`congratulations you are eligible for marrige`);
    }
     if (gender=='male' && age>=21) {
            console.log(`congratulations you are eligible for marrige`);

    } else {
        console.log(`you are not eligible for marriage`);
    }
    
}

marrigeInput('male',17)
marrigeInput('male',25)
marrigeInput('female',28)
marrigeInput('female',16)
marrigeInput('other',35)
marrigeInput('other',41)