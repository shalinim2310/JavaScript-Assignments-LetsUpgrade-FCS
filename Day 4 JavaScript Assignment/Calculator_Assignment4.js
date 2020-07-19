// Question 4 - Make a calculator in JavaScript which can do operations as Addition, Subtraction, Multiplication, Division, Squart root,Percentage.
//let list=["1.Addition","2.Subtraction","3.Multiplication","4.Division","5.Square root","6.Percentage"]
    var option=window.prompt("Choose the operation number to be performed(1 or 2 or 3...) : 1.Addition,2.Subtraction,3.Multiplication,4.Division,5.Square root,6.Percentage");
    var arr1=window.prompt("Enter number 1 : ");
    var arr2=window.prompt("Enter number 2 : ");
    let num1=parseInt(arr1);
    let num2=parseInt(arr2);
    switch(option){
        case "1":
            var sum=num1+num2;
            console.log(`Addition of ${num1} and ${num2} is ${sum} .`);
            alert(`Addition of ${num1} and ${num2} is ${sum} .`);
            break;
        
        case "2":
            var sub=num1-num2;
            console.log(`Subtraction of ${num1} and ${num2} is ${sub} .`);
            alert(`Subtraction of ${num1} and ${num2} is ${sub} .`);
            break;

        case "3":
            var mul=num1*num2;
            console.log(`Multiplication of ${num1} and ${num2} is ${mul} .`);
            alert(`Multiplication of ${num1} and ${num2} is ${mul} .`);
            break;
        
        case "4":
            var div=num1/num2;
            console.log(`Division of ${num1} and ${num2} is ${div} .`);
            alert(`Division of ${num1} and ${num2} is ${div} .`);
            break;
        case "5":
            var sqrt1=Math.sqrt(num1)
            var sqrt2=Math.sqrt(num2)
            console.log(`Square root of ${num1} is ${sqrt1}`);
            alert(`Square root of ${num1} is ${sqrt1}`);
            console.log(`Square root of ${num2} is ${sqrt2}`);
            alert(`Square root of ${num2} is ${sqrt2}`);
            break;
        case "6":
            var per1=((num1+num2)/100)*100;
            console.log(`Total percentage of ${num1} and ${num2} is ${per1}`);
            alert(`Total percentage of ${num1} and ${num2} is ${per1}`);
            break;
        default:
            console.log("Choose the correct option to do the operation .");
            alert("Choose the correct option to do the operation .");


    }