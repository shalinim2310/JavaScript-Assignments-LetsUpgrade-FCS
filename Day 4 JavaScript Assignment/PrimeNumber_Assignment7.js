
//Question 7 : Write a JavaScript code to find the prime numbers upto n number ( 2 to n ).

let num=Number(window.prompt("Enter the n value to print prime number :"));
for(var i=2;i<=num;i++){
    var notPrime=false;
    for(var j=2;j<=i;j++){
        if(i%j===0 && j!==i){
            notPrime=true;
        }
    }
    if(notPrime===false){
        console.log(i);
    }
}