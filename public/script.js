

window.onload = main

function main() {
    loadTodosFromServer()
    addEventListeners()
}

function printTodos(todos) {
    const ul = document.querySelector('ul')

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
    ul.append(li)
}

async function loadTodosFromServer() {
    const response = await fetch('http://localhost:3000/api/todos')
    const todos = await response.json()
    printTodos(todos)
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