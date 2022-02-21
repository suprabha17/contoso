var express =require("express");  //lib-----Node Module
var app=express();  // will create app object from express package

var onAboutUs=function(req, res){
    res.send("suprabha pawar");
};
var onDefault=function(req, res){
    res.send("<h1>Contoso Corporation</h1>"+
              "<hr/>"+
              "<ol>"+
                    " <li>Contoso Corporation is a fictional but</li>"+
                    " <li>representative global manufacturing conglomerate with</li>"+
                    " <li>its headquarters in Paris. ... Contoso is a global manufacturing,</li>"+
                    " <li>sales, and support organization with more than 100,000 products.</li>"+
             "</ol>");
};
app.get("/",onDefault);  // Request handler functions are registered
app.get("/aboutus",onAboutUs);  // Request handler functions are registered
var server=app.listen(8081);
console.log("Server is running on port 8081");
