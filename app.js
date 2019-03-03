var express = require("express");
var app = express();

app.get("/",function(req,res){
   console.log("Someone is filling data!");
   res.render("animation.ejs"); 
});

app.get("*",function(req,res){
   res.send("<h1>Page May Be Gone Now Please Wait For Saurabh To Correct It!!</h1>");
});
app.listen(process.env.PORT,process.env.IP,function(){
   console.log("Server begin now!"); 
});