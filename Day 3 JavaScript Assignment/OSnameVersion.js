/*Day-3 Assignment
Question 2- Write a program which will take OS name and version from the user separated by a space. Thenlog the Os name and version on the console.
Example  Input: "Android 9"
         Output: The OS name is Android and version is 9. */


    var vari = window.prompt("Enter the OS name and version ");
    
    var arr1=(vari.split(" "));
    console.log("The OS name is "+arr1[0]+" and version is "+arr1[1]+" .");
    alert("The OS name is "+arr1[0]+" and version is "+arr1[1]+" .");