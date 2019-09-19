var express = require("express");
app = express();
var path = require("path");

app.use(express.static(__dirname + '/Script'));

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname+"/colorgame.html"));
});

// app.listen(3000, function(){
//   console.log("Server running");
// });

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The YelpCamp Server Has Started!");
});
