//Months
$(document).ready(function() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let selectMonth = $("#month");
    for (let m = 0; m < 12; m++) {
        let monthNum = new Date(2018, m).getMonth()
        let month = monthNames[monthNum];
        let monthElem = document.createElement("option");
        monthElem.value = monthNum;
        monthElem.textContent = month;
        selectMonth.append(monthElem);
    }
});

//Gross Salary
let btn = document.getElementById("btn");

function findGrossSalary() {
    let num = parseFloat(document.getElementById("num").value);
    let name = document.getElementById("name").value;
    let dept = document.getElementById("dept").value;
    let hours = parseFloat(document.getElementById("hours").value);
    let empCode = document.getElementById("empCode").value;
    let fixSal = parseFloat(document.getElementById("fixSal").value);
    let grossSalary = parseFloat(document.getElementById("grossSalary"));
    let hourlyRate = parseFloat(document.getElementById("hourlyRate"));
    let excessHours = parseFloat(document.getElementById("excessHours"));


    let qCode = document.getElementById("qualiCode");

    if (empCode.selectedIndex == 0) {
        if (qCode.selectedIndex == 0) {
            grossSalary = (175 * hours) + 1500;
            alert(`${grossSalary}`);
        } else {
            grossSalary = (100 * hours) + 600;
            alert(`${grossSalary}`);
        }
    } else {
        if (hours == 160) {
            alert(`${fixSal}`);

        } else if (hours < 160) {
            hourlyRate = fixSal / 160;
            grossSalary = hourlyRate * hours;
            alert(`${grossSalary}`);
        } else {
            let excessHours = (hours - 160);
            hourlyRate = fixSal / 160;
            grossSalary = ((hourlyRate * 160) + (excessHours * hourlyRate * 2));
            alert(`${grossSalary}`);

        }
    }
}
btn.addEventListener("click", findGrossSalary);