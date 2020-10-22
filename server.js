const Bundler = require('parcel-bundler')
const express = require('express')

let bundler = new Bundler('./src/index.html')
let app = express()

process.env.ROOT_URL = 'http://localhost:5000/'

app.use(bundler.middleware())
app.listen(process.env.PORT || 5000)