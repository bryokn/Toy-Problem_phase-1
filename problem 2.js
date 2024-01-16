const salary =prompt(`input your salary`);
let nhif;
let txRate;

//Claculate tax rate
function taxRate(){
   
// Monthly Taxable Pay (Ksh)	Annual Taxable Pay (Ksh)	Rate of Tax (%)
// Up to 24,000	Up to 288,000	10.0
// 24,001 - 32,333	288,001 - 388,000	25.0
// 32,334 - 500,000	388,001 - 6,000,000	30.0
// 500,001 - 800,000	6,000,001 - 9,600,000	32.5
// Above 800,000	Above 9,600,000	35.0

    if (salary<24000){
        txRate=10/100;
    }
    else if (salary>24000 && salary<=32,333){
        txRate=25/100;
    }
    else if (salary>32333 && salary<=500000){
        txRate=30/100;
    }
    else if (salary>500000 && salary<=800000){
        txRate=32.5/100;
    }
    else if (salary>800000){
        txRate=35/100;
    }
    return (taxRate);
}

//Calculate NHIF Deduction
function nhifRate(){
// Up to 24,000	Up to 288,000	10
// 24,001 - 32,333	288,001 - 388,000	25
// Above 32,333	Above 388,000	30
  
    if (salary <= 5999){
        nhifDeduction=1000;
    }
    else if (salary >=6000 && salary<=7999){
        nhifDeduction=150;
    }
    else if (salary >=8000 && salary<=11999){
        nhifDeduction=300;
    }
    else if (salary >=12000 && salary<=14999){
        nhifDeduction=400;
    }
    else if (salary >=15000&& salary<=19999){
        nhifDeduction=500;
    }
    else if (salary >=20000 && salary<=24999){
        nhifDeduction=600;
    }
    else if (salary >=25000 && salary<=29999){
        nhifDeduction=750;
    }
    else if (salary >=30000 && salary<=34999){
        nhifDeduction=850;
    }
    else if (salary >=35000 && salary<=39999){
        nhifDeduction=950;
    } 
    else if (salary >=40000 && salary<=44999){
        nhifDeduction=1000;
    } 
    else if (salary >=45000 && salary<=49999){
        nhifDeduction=1100;
    } 
    else if (salary >=50000 && salary<=59999){
        nhifDeduction=1200;
    } 
    else if (salary >=60000 && salary<=69999){
        nhifDeduction=1300;
    } 
    else if (salary >=70000 && salary<=79999){
        nhifDeduction=1400;
    } 
    else if (salary >=80000 && salary<=89999){
        nhifDeduction=1500;
    } 
    else if (salary >=90000 && salary<=99999){
        nhifDeduction=1600;
    }
    else if (salary > 100000){
        nhifDeduction=1700;
    }
    return (nhifDeduction);
}

//call to get tax rate and NHIF Deduction
taxRate();
nhifRate();

//Dislay resultsF
console.log (`Salary: ${salary}`);
console.log(`Tax Rate: ${txRate * 100}%`);
console.log(`NHIF Deduction: ${nhifDeduction}`);

// const nssDeductionRate = 0.06;
// const nhifDeduction = 1700;

// const grossSalary = basicSalary + benefits;
// const payee = grossSalary * txRate;
// const nssfDeduction =grossSalary* nhifDeduction;
// const netSalary = grossSalary-(payee + nhifDeduction + nssfDeduction)


// return{
//     grossSalary,
//     payee,
//     nhifDeduction,
//     nssfDeduction,
//     netSalary,
// };

// }
// const basicSalary = 60000;
// const benefits = 10000;
// const salaryDetails = calculateSalary( basicSalary,benefits);
// console.log(`GROSSSALARY:`, salaryDetails.grossSalary);
// console.log(`PAYEE:`, salaryDetails.payee);
// console.log(`NHIF DEDUCTION:`, salaryDetails.nhifDeduction);
// console.log(`NSSF DEDUCTION:`, salaryDetails.nssfDeduction);
// console.log(`NET SALARY:`, salaryDetails.netSalary);
