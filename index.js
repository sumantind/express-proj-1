const express = require('express');
const app = express();
app.get("",(req,res)=>{
    res.send("<h1>Basic Express js Example</h1>");
});
app.listen(3200,()=>{
    console.log("Server running at http://localhost:3200/");
});