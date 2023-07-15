const express =require("express");
const https =require("https");
const bodyparser =require("body-parser");
app = express();
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
})


app.use(bodyparser.urlencoded({extended:true}));
app.post("/",function(req,res){
    
const query = req.body.cityname;
const id ="4ecf60d1b725870c19a8161257104ca5" 
const unit ="metric"
url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+id+"&units="+unit;
https.get(url,function(response){
  console.log(response.statusCode);
  response.on("data",function(data){
      const weatherdata= JSON.parse(data);
      const description=weatherdata.main.feels_like
      const imgpath = weatherdata.weather[0].icon;
      const imageurl ="http://openweathermap.org/img/wn"+imgpath+"@2x.png"
  res.write("<h1>The temperature in "+query+" is "+description+" now<h1>");
    res.write("<img src="+imageurl+"/>") 
    res.send();
  })  
})
})

app.listen(3000,function(){
    console.log("server started in port 3000");
}) 