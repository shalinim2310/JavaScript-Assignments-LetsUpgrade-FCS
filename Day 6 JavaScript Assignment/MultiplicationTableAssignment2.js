/*
Write a program that will display the multiplication table of a number on the webpage in a proper format.Take the input from the user.
*/

let tb=document.querySelector(".table");
var x=Number(prompt("Enter a number to print the table :",""));

let mul=(n)=>{
    for(let i=1;i<11;i++){
        
        tb.innerHTML+=`<h3>${n} x  ${i} = ${(n*i)}\n</h3>`;
    }
}
mul(x);