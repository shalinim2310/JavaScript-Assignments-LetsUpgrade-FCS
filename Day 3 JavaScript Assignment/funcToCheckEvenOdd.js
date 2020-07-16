/*Day-3 Assignment
Question 1- Take a number from a user and write a function which checks whether the number is even or odd.Assign the result to a variable and log that variable in the console.
Example  Input  : 23
         Output :The number entered is 23 and number is odd. */

//Functions 
let numb1 = function(){
    var numb = window.prompt("Enter a number");
     numb1=numb;
    if(numb1%2==0){
        console.log("The number entered is "+numb+" and number is Even. ");
        alert("The number entered is "+numb+" and number is Even. ");
    }
    else{
        console.log("The number entered is "+numb+" and number is Odd. ");
        alert("The number entered is "+numb+" and number is Odd .");
    }
}
numb1();