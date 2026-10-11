const express = require('express');
const app = express();

app.use("/",(req,res)=>{
    res.send("Home Page");
});

app.use("/login",(req,res)=>{
    res.send("Login Pageeeee");
});


app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});





// git add .
// git commit -m "Describe your changes"
// git push