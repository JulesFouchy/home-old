const express = require('express')
const app = express()
const serv = require('http').Server(app)
const path = require('path')

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

app.use('/*', express.static('docs'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'docs/index.html'))
})

serv.listen(process.env.PORT || 1234, () => console.log('Server started.'))