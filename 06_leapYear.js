
var leapYear = function(year){
if (year%4==0) {
    console.log(`year ${year} is leap year`);
    return
} else {
    var String='string'
    if (year == null || typeof year == typeof String || year==undefined || year == NaN) {
        console.log(`input is invalid`);
        return
    } else {
        console.log(`year ${year} is not leap year`);
    }
}

}

leapYear(2020)
leapYear(1999)
leapYear(1600)
leapYear(2022)
leapYear(1945)
leapYear(null)
leapYear('twenty twenty')
leapYear(undefined)
leapYear(NaN)
leapYear(1950)









