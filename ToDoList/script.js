let taskInput=document.getElementById("taskInput");
console.log(taskInput.value);
let addTask=document.getElementById("addTask");
let delTask=document.getElementById("delTask");
// let completeTask=document.getElementById("completeTask");
let taskList=[];

addTask.addEventListener("click", function(){
    console.log(taskInput.value)
    let task=taskInput.innerText;
        console.log(task);
        taskList.push(task);
        console.log(taskList);
    });