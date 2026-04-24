let visible = true;

window.onload = function(){
    loadTasks();
};

function addTask(){

    let task = document.getElementById("problem").value.trim();

    if(task === ""){
        alert("Enter task first!");
        return;
    }

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    document.getElementById("problem").value = "";

    loadTasks();
}

function loadTasks(){

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    let list = document.getElementById("taskList");

    list.innerHTML = "";

    tasks.forEach((task,index)=>{

        list.innerHTML += `
        <li>${task}</li>
        `;
    });
}

function toggleTasks(){

    let list = document.getElementById("taskList");

    if(visible){
        list.style.display = "none";
        visible = false;
    }else{
        list.style.display = "block";
        visible = true;
    }
}

function resetTasks(){

    localStorage.removeItem("tasks");

    loadTasks();
}