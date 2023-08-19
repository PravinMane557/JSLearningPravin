
let professor = {

    name: 'Vijay Kumar',
    tychiDegree:'Srprofessor',
    mobileNo: 9960298620,
    address:'shivaji narag, wasud road, sangola', 
    married: true,
    degrees:  {
        engineering: 'CSC',
        PHD: 'Advance Computing',
        Animation:'vfx',
        typing:'english 40',
        teachersDegree:function(){
            console.log(`teachers degrees are ${this.engineering},${this.PHD},${this.Animation},${this.typing}`);
        }
    },
    certificates:['hacker rank participation','certificate in IFE course', 'certificate in advance programmig']
}
console.log(professor.degrees.teachersDegree());
professor.totalExperience='14 years'

console.log(professor.totalExperience);
console.log(`degree before update is ${professor.degrees.PHD}`);
professor.degrees.PHD = 'adavance mechanical'
console.log(`degree after update is ${professor.degrees.PHD}`);

console.log(`before adding certificate cretificates are ${professor.certificates}`);

professor.certificates.push('Oracle Certified')
console.log(`after adding certificate cretificates are ${professor.certificates}`);
















