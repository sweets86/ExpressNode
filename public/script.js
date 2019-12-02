

window.onload = main

function main() {
    loadTodosFromServer()
    addEventListeners()
    /* input() */
    /* setOnClickListeners() */
}

function printTodos(todos) {
    const ul = document.querySelector("ul")

    for (const todo of todos) {
        printTodo(todo, ul)
    }
}

function addEventListeners() {
    const button = document.querySelector("button")
    button.onclick = addTodo
}

function addTodo() {
    const ul = document.querySelector("ul")
    const input = document.querySelector("input")
    const todo = input.value
    input.value = ""

    printTodo(todo, ul)
    saveTodoToServer(todo)
}

function printTodo(todo, ul) {
    var list = document.createElement("li")
    list.innerText = todo
    list.classList = "text"
    ul.append(list)
}

async function loadTodosFromServer() {
    const response = await fetch('http://localhost:3000/api/todos')
    const todos = await response.json()
    printTodo(todos)
}

async function saveTodoToServer(todo) {
    const url = 'http://localhost:3000/api/todos'
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ todo: todo }), // ({ todo })
        headers: {
            'Content-Type': 'application/json'
        }
    })
}



/* function input() {
    var box = document.createElement("div")
    box.classList = "box"

    var add = document.createElement("input")

    var button = document.createElement("button")
    button.classList = "button"
    button.innerText = "Add Todooos"
    button.onclick = function () {

    }

    box.appendChild(add)
    box.appendChild(button)
    document.body.appendChild(box)
} */