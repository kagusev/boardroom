//declare variables
const express = require("express")
const app = express()
const PORT = 8500
const mongoose = require("mongoose")
const boards = require("./models/boards")
require('dotenv').config()
// add model variable - reminder - the one we created in board.js schema file
const AnotherBoard = require('./models/boards')

//middleware
app.set("view engine", "ejs")
app.use(express.static('public'))               // where express can find css files
app.use(express.urlencoded({ extended: true })) // URl parser - extended  gives ability pass arrays

mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => { console.log('Connected to DB!'); }
)


app.get('/', async (req, res) => {

    try {
        boards.find({}, (err, basicInfo) => {
            res.render('index.ejs', { boards: basicInfo })

        })

    } catch (err) {
        if (err) return res.status(500).send(err)
    }


})























app.listen(PORT, () => console.log(`Sever runs on port ${PORT}`))

