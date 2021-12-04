var express = require("express");
var app = express();
var port = process.env.PORT || 5550;
app.listen(port, () => {
    console.log(`Sever is Running http://localhost:${port}`);
});

app.use(express.static("public"));
app.set("view engine","ejs");

var bodyParser =  require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));


app.get('/', function (req, res) {
    res.render("home");
});