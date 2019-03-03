var express= require("express");
var app = express();

app.get("/",function(res,req){
   console.log("Active");
   res.render("animation.ejs");
});

app.get("*",function(res,req){
   res.send("<h1>Darling saurabh is working on it.</h1>"); 
});

app.listen(process.env.PORT,process.env.ID,function(){
   console.log("Working server"); 
});


