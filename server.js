//declare variables
const express = require("express")
const app = express()
const PORT = 8500
const mongoose = require("mongoose")
require('dotenv').config()
// add model variable - reminder

//middleware
app.set("view engine", "ejs")
app.use(express.static('public'))               // where express can find css files
app.use(express.urlencoded({ extended: true })) // URl parser - extended  gives ability pass arrays

mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => { console.log('Connected to DB!'); }
)

app.listen(PORT, () => console.log(`Sever runs on port ${PORT}`))

