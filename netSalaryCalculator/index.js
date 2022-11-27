// declare the called button
const button = document.getElementById("submitBtn")
// add event listener to the button
button.addEventListener("click", function(){
    const bSalary = parseInt(document.getElementById("basic").value)
    const bBenefits = parseInt(document.getElementById("benefits").value)

    let grossPay = parseInt(bSalary + bBenefits);
    document.getElementById("grosspay").innerText = "Gross Pay: " + grossPay

    let taxablePay = parseInt(grossPay - (bBenefits + 24000));
    
//    generation of tax
    let tax;

    if (grossPay >=0 && grossPay<=24000) {
        tax = 0.1 * taxablePay;
        document.getElementById("tax").innerText = "Tax:" + tax
    }

    else if(grossPay > 24000 && grossPay<=32333) {
        tax = 0.25 * taxablePay;
        document.getElementById("tax").innerText = "Tax: " + tax
    }
    
    else if(grossPay >32333) {
        tax = 0.3 * taxablePay;
        document.getElementById("tax").innerText = "Tax: " + tax
    }
// generation of nssf
    let nssf = 0.06 * grossPay
    document.getElementById("nssf").innerText =  "NSSF: " + nssf
// generation of NHIF
    let nhif;
    if(grossPay <= 30000){
       
        nhif = 150;
        document.getElementById("nhif").innerText = "NHIF: " + nhif
      
    }
   
    else if(grossPay>6000 && grossPay<=7999){
        nhif = 300;
        document.getElementById("nhif").innerText = "NHIF: " + nhif
    }
    else if(grossPay>8000 && grossPay<=11999){
        nhif = 400;
        document.getElementById("nhif").innerText = "NHIF: " + nhif
    }
    else if(grossPay>12000 && grossPay<=14999){
        nhif = 500;
        document.getElementById("nhif").innerText = "NHIF: " + nhif
    }
    else if(grossPay>15000 && grossPay<=19999){
        nhif = 600;
        document.getElementById("nhif").innerText = "NHIF: " + nhif
    }
    else if(grossPay>20000 && grossPay<=24999){
        nhif = 750;
        document.getElementById("nhif").innerText = "NHIF: " + nhif
    }
    else if(grossPay>25000 && grossPay<=29999){
        nhif = 850;
        document.getElementById("nhif").innerText = "NHIF: " + nhif
    }
    else if(grossPay>30000 && grossPay<=34999){
        nhif = 900;
        document.getElementById("nhif").innerText = "NHIF: " + nhif
    }
    else if(grossPay>35000 && grossPay<=39999){
        nhif = 950;
        document.getElementById("nhif").innerText = "NHIF: " + nhif
    }
    else if(grossPay>40000 && grossPay<=44999){
        nhif = 1000;
        document.getElementById("nhif").innerText = "NHIF: " + nhif
    }
    else if(grossPay>45000 && grossPay<=49999){
        nhif = 1100;
        document.getElementById("nhif").innerText = "NHIF: " + nhif
    }
    else if(grossPay>50000 && grossPay<=59999){
        nhif = 1200;
        document.getElementById("nhif").innerText = "NHIF: " + nhif
    }
    else if(grossPay>60000 && grossPay<=69999){
        nhif = 1300;
        document.getElementById("nhif").innerText = "NHIF: " + nhif
    }
    else if(grossPay>70000 && grossPay<=79999){
        nhif = 1400;
        document.getElementById("nhif").innerText = "NHIF: " + nhif
    }
    else if(grossPay>80000 && grossPay<=89999){
        nhif = 1500;
        document.getElementById("nhif").innerText = "NHIF: " + nhif
    }
    else if(grossPay>90000 && grossPay<=99999){
        nhif = 1600;
        document.getElementById("nhif").innerText = "NHIF: " + nhif
    }
    else if(grossPay>=100000){
        nhif = 1700;
        document.getElementById("nhif").innerText = "NHIF: " + nhif
    }
// generation of net salary
    let netSalary = grossPay - (tax + nhif + nssf);
    document.getElementById("netsalary").innerText = "Net Salary: " + netSalary

})