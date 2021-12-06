const express = require('express')
const router = require('./config/routes')
const cors = require('cors')

const port = 8080

app = express()
app.use(cors())
app.use(express.json())

router(app)

app.listen(port)