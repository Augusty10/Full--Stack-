
/*A company pays a fixed salary plus incentives.
Write a program to calculate an employee’s total salary after adding:

Base salary

Travel allowance

Bonus
And then apply 10% tax deduction using assignment operators.*/


function sallaryCalculation(base, ta, bonus) {

    let total= base + ta + bonus ;
    total -= total*0.1;   // 10% tax 
    return total;
    
}

// console.log(sallaryCalculation(2000,3000,2000));

/* 
Mobile Recharge Balance Check (Comparison + Assignment)

When a user recharges:

If recharge ≥ 199 → plan validity = 28 days

If recharge ≥ 399 → plan validity = 56 days
Check the recharge amount and update the user’s validity using comparison and assignment operations.

*/


function  rechargeValidity(amount) {
    let validity=0;
    if (amount >=399) validity =56;
    else if(amount >=199)validity=28;
    return `Validity: ${validity} days`;

}

//console.log(rechargeValidity(399));


/*
3️⃣ Ecommerce Discount System (Logical + Comparison)
An online store gives discounts:
20% discount if cart value > ₹2000
Extra 5% discount if the user is a Prime member
Use logical operators to determine the final price.


4️⃣ Temperature Alert System (Logical + Comparison)
Create a program that checks room temperature:
If temp > 40°C → show “Heat Alert”
If temp < 10°C → show “Cold Alert”
Else “Normal Temperature”
Use logical and comparison operations.


5️⃣ Student Grade Updation (Assignment + Comparison)
A teacher updates marks using assignment operators:
Add bonus marks
Deduct late submission penalty
Check if the final marks are ≥ 40 to determine Pass or Fail.


6️⃣ ATM Cash Withdrawal (Comparison + Logical)
Simulate ATM withdrawal:
Check if balance ≥ withdrawal amount
Check if withdrawal limit ≤ ₹20,000
Use logical operators to allow or deny the transaction.



7️⃣ Water Bottle Temperature Status (Comparison + Logical)
A smart bottle checks water temperature:
25–35°C → “Drinkable Temperature”
<25°C → “Too Cold”
35°C → “Too Hot”
Use comparison operators to categorize.


8️⃣ Fitness App Step Goal (Comparison + Assignment)
A fitness app updates the user’s steps using += operator every hour.
At the end of the day, check if steps ≥ 10,000 → "Goal Achieved", else "Goal Not Achieved".


9️⃣ Online Exam Eligibility (Logical Operators)
Criteria:
Student must have attendance ≥ 75%
Must have submitted all assignments
Check eligibility using logical (&&, ||) operators.


🔟 Speed Monitoring System (Comparison + Logical)
A traffic system checks vehicle speed:
Speed < 60 → “Normal Speed”
60 ≤ Speed ≤ 80 → “Maintain Safe Speed”
Speed > 80 → “Overspeeding – Fine Applicable”
Use comparison operators.

*/

function finalPrice(cartValue, isPrime ){
let discount=0;

if(cartValue>2000){
discount += cartValue*0.20;
}

if(isPrime){
    discount += cartValue*0.05;
}
return cartValue-discount;

}
//console.log(finalPrice(2500,true));


function tapman(temp){
    if(temp>40) return "Heat waves";
    else if(temp<5) return" Winter is coming";
    else return "Nothing special in weather";
}
console.log(tapman(19));


function gradeUpdate(marks, bonus, penality) {
    marks += bonus;
    marks -= penality;

    let result = marks >=40? "pass": "fail";
    return {updateMarks: marks, result};

}

//console.log(gradeUpdate(35,10,2));

function atmWithdraw(balance,amount){
    if(amount>=balance&&amount <=2000)
{
    return " Transaction Succesful";

}else {
    return " Transacrion failed"
} 
}

//console.log(atmWithdraw(5000,18000));


function bottletapman(tap) {
    if(tap>=25 && tap <=35) return "panni Pi lijije ";
    else if(temp< 25) return " Too Cold ";
    else return " too hot ";

}
//console.log(bottletapman(19));


function  stepgoal() {

    let steps =0;

    steps +=2500;
    steps+=3000;
    steps +=2000;
    steps +=1500;

    if(steps >=10000) return " Goal Achived";
    else  return " Goal not Achived ";

}

//console,log(stepgoal())

 function examEligibility(attendace, submitted ){

    if(attendace >=75 && submitted == true ){
        return " Eligible for the exam ";
    } else {
        return " Not Eligible "

    }
 }
  //console.log(examEligibility(80, true )); 


  function  Velocity(speed ) {
 if (speed<60) return " Normal Speed "; 
 else if (speed <=80 ) return " maintain Safe Speed ";
else return "Overspedding - Fine Apllicable ";


 }
    console.log(Velocity(120));
    


  