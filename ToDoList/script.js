let taskInput=document.getElementById("taskInput");
let addTask=document.getElementById("addTask");
let taskContainer=document.getElementById("TaskListContainer")
let taskList=[];

addTask.addEventListener("click", function(){
    let task=taskInput.value;
    taskList.push({
        tasktitle:task
    })
    addAllTasks();     
});

function addAllTasks(){
    
    taskContainer.innerHTML="";


    for(let i=0; i<taskList.length; i++){
    console.log(taskList[i]);

    let checkbox=document.createElement("input");
    checkbox.type="checkbox";

    let li=document.createElement("li");
    li.innerText=taskList[i].tasktitle;
    li.prepend(checkbox);

    let button=document.createElement("button");
    button.innerText="Delete";
    li.appendChild(button);
    
    button.addEventListener("click", function(){
        li.remove();   
        let taskremove=taskList.splice(i,1);
        console.log(taskremove); 
    });


    taskContainer.appendChild(li);
    }
    
}

