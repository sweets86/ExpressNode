

window.onload = main

function main() {
    loadTodosFromServer()
    addEventListeners()
    addTodo()
    /* input() */
    /* setOnClickListeners() */
}

async function loadTodosFromServer() {
    const response = await fetch('http://localhost:3000/api/todos')
    const todos = await response.json()
    printTodos(todos)

    console.log(todos)
}

function printTodos(todos) {
    for (const todo of todos) {
        printTodo(todo, listTodo)
    }
}

function addEventListeners() {
    const button = document.querySelector("button")
    button.onclick = addTodo
}

function addTodo() {
    const input = document.querySelector("input")
    const todo = input.value
    input.value = ""

    printTodo(todo, listTodo)
    saveTodoToServer(todo)
}

function printTodo(todo, listTodo) {
    var listTodo = document.createElement("ul")
    listTodo.classList = "box"

    var list = document.createElement("li")
    list.innerText = todo
    list.classList = "text"

    listTodo.appendChild(list)
    document.body.appendChild(listTodo)
}

async function loadTodosFromServer() {
    const response = await fetch('http://localhost:3000/api/todos')
    const todos = await response.json()
    printTodo(todos)
}

async function saveTodoToServer(todo, listTodo) {
    const url = 'http://localhost:3000/api/todos'
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ todo: todo }),
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