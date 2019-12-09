let btn = document.getElementById("btn");

//toggling clss from hidden to show when Employee type is Regular worker
document.getElementById(`empCode`).addEventListener(`change`, () => {
    document.getElementById('fixSalDiv').classList.toggle('show');
});

function calcGrossSalary() {
    let empCode = document.getElementById("empCode");
    let qCode = document.getElementById("qualiCode");
    let hours = document.getElementById("hours");
    let fixSal = document.getElementById("fixSal");
    let grossSalary;

    //gross salary
    if (empCode.selectedIndex == 0) {
        if (qCode.selectedIndex == 0) {
            grossSalary = (175 * parseFloat(hours.value)) + 1500;
        } else {
            grossSalary = (100 * parseFloat(hours.value)) + 600;
        }
    } else {
        document.getElementById('fixSalDiv').classList.toggle('show');
        if (hours.value == 160) {
            grossSalary = grossSalary.value;
        } else if (hours.value < 160) {
            hourlyRate = (parseFloat(fixSal.value) / 160).toFixed(2);
            grossSalary = parseFloat(hourlyRate * hours.value);
        } else {
            excessHours = parseFloat(hours.value) - 160;
            hourlyRate = (parseFloat(fixSal.value) / 160).toFixed(2);
            grossSalary = ((parseFloat(hourlyRate) * 160) + (excessHours * (hourlyRate) * 2));
        }
    }
    return grossSalary;
}

function calcDeduction(grossSalary) {
    //deduction
    const incomeTaxPercentage = 25;
    const incomeTax = (parseFloat(grossSalary * incomeTaxPercentage) / 100).toFixed(2);
    let totalDeduction;
    if (grossSalary > 3000) {
        totalDeduction = parseFloat(incomeTax) + 33;
    } else if (grossSalary < 2500) {
        totalDeduction = 19.20;
    } else {
        totalDeduction = parseFloat(incomeTax) + 19.20;
    }
    return totalDeduction;
}

function calcNetPay() {
    let num = document.getElementById("num");
    let name = document.getElementById("name");
    let dept = document.getElementById("dept");

    //net payable
    const grossSalary = calcGrossSalary();
    const deductions = calcDeduction(grossSalary);
    netPay = grossSalary - deductions;

    //output
    document.getElementById(`numOutput`).innerText = num.value;
    document.getElementById(`nameOutput`).innerText = name.value;
    document.getElementById(`deptOutput`).innerText = dept.value;
    document.getElementById(`empCodeOutput`).innerText = empCode.value;
    document.getElementById(`hoursOutput`).innerText = hours.value;
    document.getElementById(`grossSalaryOutput`).innerHTML = grossSalary;
    document.getElementById(`totalDeductionOutput`).innerHTML = deductions;
    document.getElementById(`netPayOutput`).innerHTML = netPay;
}

btn.addEventListener("click", calcNetPay);