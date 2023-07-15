const express = require("express");
const https =require("https");

const app = express();
app.get("/",function(req,res){
    res.send("hi hello  ");

});
url ="https://api.openweathermap.org/data/2.5/weather?lat=16.3067&lon=80.0465&appid=4ecf60d1b725870c19a8161257104ca5&units=metric";
https.get(url,function(response){
    console.log(response.statusCode);
    response.on("data",function(data){
        const weatherdata = JSON.parse(data);
        const temp = weatherdata.weather[0].description;
        console.log(temp);
    })
})
app.listen(3000,function(response){
    console.log("server started at port 3000")
})