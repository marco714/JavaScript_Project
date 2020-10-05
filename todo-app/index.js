const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('notes'));

if (todos){
    todos.forEach(function (todo){
        addtodo(todo);
    })
}
form.addEventListener('submit', function(e) {
    e.preventDefault();
    addtodo();
})

function addtodo(todo){

    
    let todoText = input.value;

    if (todo){
        todoText = todo.text;

    }

    if (todoText){
        const todoEl = document.createElement('li');
        
        if (todo && todo.completed){
            todoEl.classList.add('completed')
        }

        todoEl.innerText = todoText;

        todoEl.addEventListener('click', function(){
            todoEl.classList.toggle('completed');
            updateLS();
        })

        todoEl.addEventListener('contextmenu', function(e){
            e.preventDefault();
            todoEl.remove();

            updateLS();
        })
        todosUL.appendChild(todoEl);
        input.value = "";

        updateLS()
    }

}

function updateLS(){
    const todosEl = document.querySelectorAll('li');
    const todos = [];

    todosEl.forEach(function (todoEl){
        todos.push({
            text:todoEl.innerText,
            completed:todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem("notes", JSON.stringify(todos))
}