var express = require("express");
var app = express();
var port = process.env.PORT || 5550;
app.listen(port, () => {
    console.log(`Sever is Running http://localhost:${port}`);
});

app.get('/', function (req, res) {
    res.send('Hello World')
});