/** Problem -01 ( Divide the Asset ) */
var area = 800;
var result = area / 2;
console.log(result);

/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
if (money >= 25000) {
    console.log('Laptop');
}
else if (money >= 10000) {
    console.log('Cycle');
}
else {
    console.log('Chocolate');

}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
if (lastDay >= 3 && lastDay <=30) {
    for (var i = 1; i <= lastDay; i++) {
        if (i % 3 === 0) {
            console.log(i + "-mcdicine");

        } else {
            console.log(i +"-rest");

        }
    }
}
/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";
if (fileName.includes(".pdf") || fileName.includes(".docx") || fileName[0] === "#") {

    console.log("Store");

} else {
    console.log("Delete");

}

/** Problem 05 - ( PH Email Generator )  */
var student = {
    name: "jhankar",
    roll: 1014,
    department: "cse"
};

var email = student.name + student.roll + '.' + student.department + "@ph.ac.bd";
console.log(email);

/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
if (startingSalary > 0 && startingSalary <= 10000000 && experience > 0 && experience <= 50) {
    var CurrentSalary = startingSalary
    for (var i = 1; i <= experience; i++) {
        CurrentSalary = CurrentSalary + (CurrentSalary *5)/100
    }
}
console.log(CurrentSalary.toFixed(2));
