const express = require('express')

const cors = require('cors')

require('dotenv').config()

//Get routes to the variabel here
const router =  require("./src/routes")

const app = express()

const port = 5000

app.use(express.json())
app.use(cors())
//Create endpoint grouping and router here
app.use("/api/v1/", router)
app.use('/uploads', express.static('uploads'))

app.listen(port, () => console.log(`Listening on port ${port}!`))