const express = require('express');
const app = express();


//app.use("/routes",roure handler 1,route handler 2,[route handler 3,route handler 4,route handler 5],route handler 6,route handler 7,[route handler 8,route handler 9,route handler 10)];

app.get("/user/addData",(req,res)=>{
    const token="xyz"
    const isAuthorised=token==="xyz"
    if(isAuthorised){
        res.send("Data added successfully")
    }else{
        res.status(401).send("You are not authorised to add data")
    }
})
app.get("/user/deleteData",(req,res)=>{
   const token="abc"
   const isAuthorised=token==="abc"
   if(isAuthorised){
       res.send("Data deleted successfully")
   }else{
       res.status(401).send("You are not authorised to delete data")
   }
})

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});





// git add .
// git commit -m "Describe your changes"
// git push