var bodyParser = require('body-parser');
var express = require('express');
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(express.static(path.join(__dirname, 'public')));


require("./app/routing/api-routes")(app);
require("./app/routing/html-routes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
