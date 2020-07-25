/* Make a webpage that will ask the name of the user. Then will display a welcome message on the webpage. Also the webpage should also have a clock.
Using the toggle method of classList add a dark mode feature to the website. */


const name=prompt("What's your name?","Anonymous");
const hy=document.querySelector('.greet');
hy.innerHTML+=`<h2><i> Hi ${name}, Enjoy your day !!!!</i></h2>`;



const t = document.getElementById('time');


function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    t.innerHTML = `${time}`;
}
setInterval(clock,1000);


const mode=document.querySelector('button');

mode.onclick=()=>{
    mode.classList.toggle('white');
    document.body.classList.toggle('black');
    if(mode.innerText=="Dark-Mode")
    mode.innerText="Light-Mode";
    else
    mode.innerText="Dark-Mode"
};
console.log(mode)