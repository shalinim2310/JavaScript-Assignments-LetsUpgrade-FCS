//Question 6 : Write a loop which prompts for a number greater than 100. If the visitor enters another number-ask them to input again.
//The loop must ask for a number until either the visitor enters a number greater than 100 or cancels input/enters an empty line.

var number=Number(window.prompt("Enter a number"));
while(true){
    if(number>=100){
        console.log(number>=100 ? "Congrats you entered the correct number":"No you did not enter the correct number");
        break;
    }
    else{
        var number=Number(window.prompt("Enter a number"));
        continue
    }
    
}
