const express = require('express')
const app = express()

app.get('/', (req, res) => {
	res.send('Hello world')
})
app.get('/another', (req, res) => {
	res.send('another')
})
app.get('/direct', (req, res) => {
	res.redirect(301, 'https://www.baidu.com')
})

app.post('/login', (req, res) => {

})



app.listen(3333)