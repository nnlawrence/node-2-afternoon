const express = require('express')

const messctrl = require('./controllers/messages_controller')

const app = express()

app.use(express.json())

app.use(express.static(__dirname + '/../public/build'))

const port = 3001
app.listen(port, () => {
    console.log('running')
})

const messageBaseUrl = "/api/messages"
app.post(messageBaseUrl, messctrl.create)
app.get(messageBaseUrl, messctrl.read)
app.put(`${messageBaseUrl}/:id`, messctrl.update)
app.delete(`${messageBaseUrl}/:id`, messctrl.delete)
