const Bundler = require('parcel-bundler')
const express = require('express')

let bundler = new Bundler('./src/index.html')
let app = express()

app.use(bundler.middleware())
// app.use('/', express.static('dist'));
// app.use('/experimental/', express.static('dist'));
// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist/index.html'))
// })
app.listen(1234)