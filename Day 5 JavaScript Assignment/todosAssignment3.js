/*
Question 3
Using promises/async await/fetch get the random todos from the json placeholder api. And log all the completed todos to the console.
API Endpoint : https://jsonplaceholder.typicode.com/todos

*/


function fetchTodos(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then (response=>{console.log(response)
    return response.json()})
    .then(data=>{console.log(data);
    for(let i=0;i<data.length;i++){
        if(data[i].completed==true){
            console.log(data[i]);
        }
    }})
    .catch(error=>console.log(error))
}
fetchTodos();