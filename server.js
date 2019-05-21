const express = require("express");
const app = express();
// const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 8080;


app.use(express.static('public'));
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine","handlebars");

app.get("/", function(req, res){
  res.render("index")
});

app.listen(PORT,function(){
  console.log("App now listening at localhost:" + PORT);
});