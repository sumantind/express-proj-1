const express = require('express');
const app = express();

console.log(app)
app.get("",(req,res)=>{
    res.send("<h1>Basic Express js Example</h1>");
});
app.get("/about",(req,res)=>{
    res.send("<h1>Welcome to About Page</h1>");
});
app.get("/contact",(req,res)=>{
    res.send("<h1>Welcome to Contact Page</h1>");
});
app.listen(3200,()=>{
    console.log("Server running at http://localhost:3200/");
});