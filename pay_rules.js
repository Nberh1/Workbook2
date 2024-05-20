// //declate variables

 var hoursWorked = 20;
 var regularPayRate = 12.50;

 // var hoursWorked = 40;
 // var regularPayRate = 25;

 // var hoursWorked = 45;
 // var reugularPayRate =  17.3;

 var regularHours = 40;
 var overtimePayRate = regularPayRate * 1.5;
 var overtimeHours = hoursWorked - regularHours
 var regularpay;
 var overtimepay;
 var grossPay;

 //makecalculation for regular pay
 if(hoursWorked >regularHours) {
    overtimepay = overtimePayRate + overtimeHours;
 } else {
    //make calculation for overtime paay
 }
 
 grossPay = regularPay + overtimepay;