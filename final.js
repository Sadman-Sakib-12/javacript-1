/** Problem -01 ( Divide the Asset ) */
var area = 100;
var result = area / 2;
console.log(result);

var area = 15;
var result = area / 2;
console.log(result);

var area = 2060;
var result= area / 2;
console.log(result);

/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
if (money >= 45000) {
    console.log('Laptop');
}

else if(money >=10000) {
    console.log('Cycle');

}

else{
    console.log('Chocolate');

}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;

for (var i = 1; i <= lastDay; i++) {
    if (i % 3 === 0) {
        console.log('-mcdicine');

    } else {
        console.log('-rest');

    }
}

/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";
    if (fileName.includes(".pdf") || fileName.includes(".docx") || fileName.includes("#")) {
       
        console.log("Store");
        
    }else{
        console.log("Delete");
        
    }

/** Problem 05 - ( PH Email Generator )  */
var student = { 
    name: "jhankar",
    roll: 1014,
    department: "cse" };

var email =student.name+''+student.roll+'.'+student.department+''+'@ph.ac.bd';
console.log(email);

var student = {
    name: 'monu',
    roll: 99,
    department: 'eee' }

var email =student.name+''+student.roll+'.'+student.department+''+'@ph.ac.bd';
console.log(email);

var student = {
    name: 'mewo',
    roll: 96,
    department: 'cse' }
var email =student.name+''+student.roll+'.'+student.department+''+'@ph.ac.bd';
console.log(email);

/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;

var CurrentSalary=startingSalary
for(var i=1; i<=experience; i++){
    CurrentSalary=CurrentSalary+(CurrentSalary*0.05)
}
console.log(CurrentSalary.toFixed(2));
