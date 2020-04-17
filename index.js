

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000
const todos = ['vattna blommorna', 'Essa bjuder på lunch']

app.use('/api', bodyParser.json())

app.use(express.static('public'))
app.get('/api/todos', (req, res) => {
    res.setHeader("Content-Type", "application/json")
    res.send(todos)
})

app.post('/api/todos', (req, res) => {
    todos.push(req.body.todo)
    res.send()
})

app.delete('/api/todos', (req, res) => {

    let indexToRemove

    todos.forEach((todo, index) => {
        if (todo == req.body.todo) {
            indexTORemove = index
            return
        }
        todos.splice(indexToRemove, 1)
        res.status(200)
        res.send()
    })


})

/* app.get('/', (req, res) => res.send('Hello World'))
app.get('/contact', (req, res) => res.send('contact..') ) */

app.listen(port, () => console.log(`Server is running - http://localhost:${port}`)) // ('Server is running at port ' + port))