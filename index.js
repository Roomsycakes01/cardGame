const express = require('express')
const router = require('./config/routes')

const port = 8080

app = express()
app.use(express.json())

router(app)

app.listen(port)