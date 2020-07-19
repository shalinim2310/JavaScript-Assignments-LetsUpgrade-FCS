/*   Question 5: You are managing a sales department for your company, you want to reward your employees based on the sales made by them during the year.
The criteria is as follows:
    1. Sales from 0-5000 : 2%
    2. Sales from 5001-10000 : 5%
    3. Sales from 10001-20000 : 7%
    4. Above 20000 : 10%
    Then log the total commision earned by him.*/

let sales=window.prompt("Enter the total sales made by the employees : ");
let sale=parseInt(sales);
let total;
if(sale>=0 && sale<=5000){
  total=sale*0.2;
   alert(`Total commision earned by employee is ${total}`);
   console.log(`Total commision earned by employee is ${total}`);
}
if(sale>=5001 && sale<=10000){
    total=(5000*0.2)+((sale-5000)*0.05);
    alert(`Total commision earned by employee is ${total}`);
    console.log(`Total commision earned by employee is ${total}`);
}
if(sale>=10001 && sale<=20000){
    total=(5000*0.2)+(5000*0.05)+((sale-10001)*0.07);
    alert(`Total commision earned by employee is ${total}`);
   console.log(`Total commision earned by employee is ${total}`);
}
if(sale>=20001){
    total=(5000*0.2)+(5000*0.05)+(10000*0.07)+((sale-20000)*0.1);
    alert(`Total commision earned by employee is ${total}`);
   console.log(`Total commision earned by employee is ${total}`);
}
