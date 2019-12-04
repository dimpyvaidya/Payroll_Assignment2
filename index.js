let btn = document.getElementById("btn");

let num = document.getElementById("num");
let name = document.getElementById("name");
let dept = document.getElementById("dept");
let empCode = document.getElementById("empCode");
let qCode = document.getElementById("qualiCode");
let grossSalary = document.getElementById("grossSalary");
let hourlyRate = (document.getElementById("hourlyRate"));
let excessHours = (document.getElementById("excessHours"));
let incomeTax = (document.getElementById("incomeTax"));
let totalDeduction = (document.getElementById("totalDeduction"));
let netPay = (document.getElementById("netPay"));
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

    // return `<article>
    // <h2>Pay Slip</h2>
    //         <label> Employee Number :</label>
    //         <label>${num}</label><br><br>
    //         <label> Employee Name :</label>
    //         <label>${name}</label><br><br>
    //         <label> Department :</label>
    //         <label>${dept}</label><br><br>
    //         <label> Employee Type Code :</label>
    //         <label>${empCode}</label><br><br>
    //         <label> Working hours :</label>
    //         <label>${hours}</label><br><br>
    //         <label>  Gross Salary :</label>
    //         <label>${grossSalary}</label><br><br>
    //         <label> Deduction :</label>
    //         <label>${totalDeduction}</label><br><br>
    //         <label>  Net Salary :</label>
    //         <label>${netPay}</label><br><br>
    //         </article>`;
    document.getElementById(`numOutput`).innerText = num.value;
    document.getElementById(`nameOutput`).innerText = name.value;
    document.getElementById(`deptOutput`).innerText = dept.value;
    document.getElementById(`empCodeOutput`).innerText = empCode.value;
    document.getElementById(`hoursOutput`).innerText = hours.value;
    // document.getElementById(`grossSalaryOutput`) = grossSalary;
    // document.getElementById(`totalDeductionOutput`) = totalDeduction;
    // document.getElementById(`netPayOutput`) = netPay;

}

btn.addEventListener("click", output);


// 1.add an event listener to the button when clicked (get payslip)
// 2. get input values from form
//3. now that you have the form values, calculate for the payslip data // calculate function
// 4. inside cacl function you can also have another function to get/calc deductions
// 5. now that you have your net income print them to the html page
//