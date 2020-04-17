

window.onload = main

function main() {
    loadTodosFromServer()
    addEventListeners()
    
}

function printTodos(todos) {
    const ul = document.querySelector('ul')
    ul.innerHTML = ""

    for (const todo of todos) {
        printTodo(todo, ul)
    }
}

function addEventListeners() {
    const button = document.querySelector('button')
    button.onclick = addTodo
}

function addTodo() {
    const ul = document.querySelector('ul')
    const input = document.querySelector('input')
    const todo = input.value
    input.value = ""

    printTodo(todo, ul)
    saveTodoToServer(todo)
}

function printTodo(todo, ul) {
    const li = document.createElement('li')
    li.innerHTML = todo

    let button = document.createElement("button")
    button.innerText = "Ta Bort!"
    button.data = todo
    button.onclick = removeTodoToServer

    ul.append(li)
    li.appendChild(button)
}

async function loadTodosFromServer() {
    const response = await fetch('http://localhost:5502/api/todos')
    const todos = await response.json()
    printTodos(todos)
}

async function saveTodoToServer(todo) {
    const url = 'http://localhost:5502/api/todos'
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ todo: todo }), // ({ todo })
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

async function removeTodoToServer(event) {

    let todo = event.srcElement.data

    const url = 'http://localhost:5502/api/todos'
    const response = await fetch(url, {
        method: 'DELETE',
        body: JSON.stringify({ todoToRemove: todo }), // ({ todo })
        headers: {
            'Content-Type': 'application/json'
        }
    })
    console.log(todo)

    await loadTodosFromServer()
}