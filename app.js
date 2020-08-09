var express = require('express')
var app = express()
var bodyParser = require("body-parser")
const fetch = require("node-fetch")
const count_words = require("./freq")
app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine","ejs")

var file_data = ""

app.get("/", function (req, res) {
    res.render("new");
})

app.post("/result",async function (req, res) {
    var number = req.body.num
    const res_data = count_words(file_data,number)
    res.render("res", {res: res_data} )
   
})

app.listen(process.env.PORT, async function () {
    console.log("Server Started!");
    const url = 'https://terriblytinytales.com/test.txt'
    fetch(url).then(async (data) => {
        file_data  = await data.text()
        console.log("Data Loaded")
    })
}); 