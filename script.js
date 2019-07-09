window.onload=function(){
    sessionStorage.clear();
};

const myfunc=(event)=>{
  if(event.which === 13){
    if(JSON.parse(sessionStorage.getItem("todolist"))===null){
        let data = document.getElementById("inputtext").value;
        let ID = 0;
        let todo = {
            id:ID,
            text:data
        };
        let todoarray = [];
        todoarray.push(todo);
        sessionStorage.setItem("todolist",JSON.stringify(todoarray));
        let btn = "<button onclick='btnclick(" + todo.id + ")' id=" + todo.id + "> X </button>";
        let task = document.createElement("li");
        task.innerHTML = document.getElementById("inputtext").value;
        task.innerHTML+= btn;
        document.getElementById("list").appendChild(task);
        document.getElementById("inputtext").value="";
    }
    else{
        let todoarray = JSON.parse(sessionStorage.getItem("todolist"));
        let ID = todoarray[todoarray.length-1].id + 1;
        let data= document.getElementById("inputtext").value;
        let todo = {
            id:ID,
            text:data
        };
        let btn = "<button onclick='btnclick(" + todo.id + ")' id=" + todo.id + "> X </button>";
        let task = document.createElement("li");
        task.innerHTML = document.getElementById("inputtext").value;
        task.innerHTML+= btn;
        document.getElementById("list").appendChild(task);
        document.getElementById("inputtext").value="";
        todoarray.push(todo);
        sessionStorage.setItem("todolist",JSON.stringify(todoarray));


    }
  } 
};

const btnclick = (ID)=>{
    let todos = JSON.parse(sessionStorage.getItem("todolist"));
    let btn =   document.getElementById(ID);
    let index = todos.findIndex(x => x.id === ID);
    todos.splice(index,1);
    sessionStorage.setItem("todolist",JSON.stringify(todos));
    btn.parentElement.remove();
}