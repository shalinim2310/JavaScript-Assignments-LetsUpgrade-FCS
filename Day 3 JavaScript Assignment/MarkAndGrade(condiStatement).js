/* Day-3 Assignment
Question 3 - Write a program to take marks as input from the user and grade him accordingly. Use Conditional statement.Also the same code using switch or ternary.
Example  Input : 50
         Output : Mark is 50  and grade is B .  */


let mark=window.prompt("Enter the mark");
var grade;
//Conditional statements

if(mark>=91){
    grade="O";
}
else if((mark>=81) && (mark<=90)) {
    grade="A+";
}
else if((mark>=71) && (mark<=80)) {
    grade="A";
}
else if((mark>=61) && (mark<=70)) {
    grade="B+";
}
else if((mark>=51) && (mark<=60)) {
    grade="B";
}
else{
    grade="Fail"
}
console.log("Marks is "+mark+" and grade is "+grade+" .");
alert("Marks is "+mark+" and grade is "+grade+" .");