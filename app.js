var express = require("express");
var app = express();

app.use(express.static("public"));

app.use

app.get("/",(req,res)=>{
	res.render("col.ejs");
});

// app.listen(4000,()=>{
// 	console.log("Server is starting");
// });
app.listen(process.env.PORT, process.env.IP);
