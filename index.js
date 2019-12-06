let btn = document.getElementById("btn");

let num = document.getElementById("num");
let name = document.getElementById("name");
let dept = document.getElementById("dept");
let empCode = document.getElementById("empCode");
let qCode = document.getElementById("qualiCode");
let grossSalary = document.getElementById("grossSalary");
let hourlyRate = document.getElementById("hourlyRate");
let excessHours = document.getElementById("excessHours");
let incomeTax = document.getElementById("incomeTax");
let totalDeduction = document.getElementById("totalDeduction");
let netPay = document.getElementById("netPay");
let hours = document.getElementById("hours");
let fixSal = document.getElementById("fixSal");

document.getElementById(`empCode`).addEventListener(`change`, () => {
    document.getElementById('fixSalDiv').classList.toggle('show');
});

function output() {
    function calcGrossSalary() {
        //gross salary
        if (empCode.selectedIndex == 0) {
            if (qCode.selectedIndex == 0) {
                grossSalary.innerHTML = (175 * parseFloat(hours.innerHTML)) + 1500;
            } else {
                grossSalary.innerHTML = (100 * parseFloat(hours.innerHTML)) + 600;
            }
        } else {
            document.getElementById('fixSalDiv').classList.toggle('show');
            if (hours.innerHTML == 160) {
                grossSalary.innerHTML = grossSalary.innerHTML;
            } else if (hours.innerHTML < 160) {
                hourlyRate.innerHTML = (parseFloat(fixSal.innerHTML) / 160).toFixed(2);
                grossSalary.innerHTML = parseFloat(hourlyRate.innerHTML * hours.innerHTML);
            } else {
                excessHours.innerHTML = parseFloat(hours.innerHTML) - 160;
                hourlyRate.innerHTML = (parseFloat(fixSal.innerHTML) / 160).toFixed(2);
                grossSalary.innerHTML = ((parseFloat(hourlyRate.innerHTML) * 160) + (excessHours.innerHTML * (hourlyRate.innerHTML) * 2));
            }
        }
    }

    function calcDeduction() {
        //deduction
        incomeTax.innerHTML = (parseFloat(grossSalary.innerHTML * 25) / 100).toFixed(2);
        if (grossSalary.innerHTML > 3000) {
            totalDeduction.innerHTML = parseFloat(incomeTax.innerHTML) + 33;
        } else {
            totalDeduction.innerHTML = parseFloat(incomeTax.innerHTML) + 19.20;
        }
    }

    function calcNetPay() {
        //net payable
        netPay.innerHTML = parseFloat(grossSalary.innerHTML) - parseFloat(totalDeduction.innerHTML);
    }

    document.getElementById(`numOutput`).innerText = num.value;
    document.getElementById(`nameOutput`).innerText = name.value;
    document.getElementById(`deptOutput`).innerText = dept.value;
    document.getElementById(`empCodeOutput`).innerText = empCode.value;
    document.getElementById(`hoursOutput`).innerText = hours.value;
    document.getElementById(`grossSalaryOutput`).innerHTML = grossSalary;
    document.getElementById(`totalDeductionOutput`).innerHTML = totalDeduction;
    document.getElementById(`netPayOutput`).innerHTML = netPay;
}

btn.addEventListener("click", output);