const express = require('express');
const app = express();

app.use("/user",(req,res,next)=>{
   
    console.log("Middleware 1");
    // res.send("Home Page");
    next();
},
(req,res,next)=>{
    // res.send("About Page");
    console.log("Middleware 2");
    next();
},
(req,res,next)=>{
    res.send("Contact Page");
    console.log("Middleware 3");
    next();
});


app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});





// git add .
// git commit -m "Describe your changes"
// git push