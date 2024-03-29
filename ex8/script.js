/*
    Make a Todo List
    0) Make it so that after entering the task and clicking the "Add Task" button, that new task appears inside the todo-list.
    1) Add the ability to check off tasks by clicking on them - (text-decoration:strikethrough is a nice way to)
    BONUS) Add a functioning "delete" button to each task (HINT: use the keyword "this" in your delete button's click listener! Console log "this" to see what value it holds)
    SUPER BONUS) Make each task editable
*/

var button=document.getElementById("add-button");
var text=document.getElementById("description");

button.addEventListener("click",function(){
    var newText=text.value;
    var todo=document.getElementById('todo-list');
    var li=document.createElement('li');
    li.innerHTML=newText;
    console.log(this);


    li.addEventListener("click", function(){
        this.style.textDecoration="line-through";
    })
    todo.appendChild(li);

    console.log(this);

    
})