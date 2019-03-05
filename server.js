var express = require("express");
var path = require("path");

var app = express();
let PORT = process.env.PORT;
if (PORT == null || PORT == "") {
  PORT = 8000;
}
// app.listen(port);

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log("listening on port "+ PORT)
})