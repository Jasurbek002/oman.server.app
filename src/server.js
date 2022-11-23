const express = require('express')

const cors = require('cors')
const appRouter = require('./modules/index.js')

const app = express()
app.use(cors())
app.use(express.json())
// app.use(appRouter)


app.listen(process.env.PORT||5000,() => console.log('server run'))