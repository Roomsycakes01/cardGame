const express = require('express')
const ObjectID = require('mongodb').ObjectId
const router = require('./config/routes')

const port = 3000

app = express()
app.use(express.json())

router(app)

app.listen(port)