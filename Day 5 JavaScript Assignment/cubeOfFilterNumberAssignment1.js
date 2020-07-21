/*
Question 1- Write a program which does the following things:
1. Takes a positive number from user.
2.Makes an array of numbers till the number given by user.
3. Use higher order function of filter the odd numbers.
4. Generate an array of cubes of the filtered numbers.
*/

n=parseInt(prompt("Enter a positive number"));
let arr=[];
for(let i=1;i<=n;i++){
    arr.push(i);
}
let arr1=arr.filter((n)=>n%2!==0).map((n)=>n**3)
console.log(arr1);
