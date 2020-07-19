//Create a for loop that iterates upto 100 while outputing "Fizz" at multiples of 3,"Buzz" at multiples of 5 and "FizzBuzz" at multiples of 3 and 5.


for (i=1;i<=100;i++){
    if(i%3==0 && i%5==0){
        console.log(i + " FizzBuzz");
    }
    else if (i%3==0){
        console.log(i+" Fizz");
    }
    else if (i%5==0){
        console.log(i+ " Buzz");
    }
    
}