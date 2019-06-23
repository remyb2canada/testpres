const express = require('express')
const app = express()

console.log('hello ' + __dirname)

app.use('/', express.static(__dirname))

app.listen(3000, function () {
	console.log('Now listening on port 3000!')
})

