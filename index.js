var express = require("express");
var bodyParser = require("body-parser");
var router = require("./routes/routes");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//comentario
router(app);

var server = app.listen(5000, function () {
  console.log("API corriendo en: " + server.address().port);
});
