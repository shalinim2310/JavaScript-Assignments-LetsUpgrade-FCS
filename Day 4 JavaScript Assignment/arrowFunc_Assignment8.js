/*  Question 8: Replace Function Expressions with arrow functions in the code below:
function ask(question,yes,no){
    if(confirm(question)) yes()
    else no();
  }
ask{
    "Do you agree?",
    function()  { alert("you agreed.") }, 
    function() { alert("You cancelled the execution.");}
     };
*/

let ask=(question,yes,no)=>{if(confirm(question))yes() ;else no();};
ask("do you agree?",yes=>{alert("You agreed")},no=>{alert("You cancelled the execution")});