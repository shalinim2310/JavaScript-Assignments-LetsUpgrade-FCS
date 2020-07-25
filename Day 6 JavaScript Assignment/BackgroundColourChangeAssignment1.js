/*
write a program that will iterate over an array of colors and change the background of the page after 5 seconds.

*/

var i=0;
var colors=['brown','Red','orange','yellow','green','blue'];
var bg=document.getElementById('bg');

function changeColor(){
bg.style.backgroundColor=colors[i];
i++;
if(i==colors.length)
i=0;
}

setInterval(changeColor, 5000);