let btn = document.getElementById("btn");

let num = document.getElementById("num").value;
let name = document.getElementById("name").value;
let dept = document.getElementById("dept").value;
let empCode = document.getElementById("empCode").value;
let qCode = document.getElementById("qualiCode");
let grossSalary = parseFloat(document.getElementById("grossSalary"));
let hourlyRate = parseFloat(document.getElementById("hourlyRate"));
let excessHours = parseFloat(document.getElementById("excessHours"));
let incomeTax = parseFloat(document.getElementById("incomeTax"));
let totalDeduction = parseFloat(document.getElementById("totalDeduction"));
let netPay = parseFloat(document.getElementById("netPay"));

document.getElementById(`empCode`).addEventListener(`change`, () => {
    document.getElementById('fixSalDiv').classList.toggle('show');
});

function netPayable() {
    //gross salary
    let hours = parseFloat(document.getElementById("hours").value);
    let fixSal = parseFloat(document.getElementById("fixSal").value);

    if (empCode.selectedIndex == 0) {

        if (qCode.selectedIndex == 0) {
            grossSalary = (175 * hours) + 1500;
        } else {
            grossSalary = (100 * hours) + 600;
        }
    } else {
        document.getElementById('fixSalDiv').classList.toggle('show');
        if (hours == 160) {
            grossSalary = grossSalary;
        } else if (hours < 160) {
            hourlyRate = fixSal / 160;
            grossSalary = hourlyRate * hours;
        } else {
            excessHours = (hours - 160);
            hourlyRate = fixSal / 160;
            grossSalary = ((hourlyRate * 160) + (excessHours * hourlyRate * 2));

            //deduction
            incomeTax = ((grossSalary * 25) / 100).toFixed(2);
            if (grossSalary > 3000) {
                totalDeduction = incomeTax + 33;
            } else {
                totalDeduction = incomeTax + 19.20;
            }

            //net payable
            netPay = grossSalary - totalDeduction;
        }
    }
    document.getElementById(`numOutput`).innerText = num;
    document.getElementById(`nameOutput`).innerText = name;
    document.getElementById(`deptOutput`).innerText = dept;
    document.getElementById(`empCodeOutput`).innerText = empCode;
    document.getElementById(`hoursOutput`).innerText = hours;
    document.getElementById(`grossSalaryOutput`).innerText = grossSalary;
    document.getElementById(`totalDeductionOutput`).innerText = totalDeduction;
    document.getElementById(`netPayOutput`).innerText = netPay;

}

btn.addEventListener("click", netPayable);