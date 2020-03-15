var express = require('express')
var app = express();
app.use(express.static("public"));
//requesr gửi lên server lên public mà tìm
app.set("view engine","ejs")
app.set("views","./views")

app.listen(3000);

app.get("/",function(req,res){
    res.render("trangchu")
})