const express = require("express");
const app = express();

//handle auth for all get put patch delete requests
app.use((req, res, next) => {
  const token = "xyz"; //token from request header
  const isAuthorised = token === "xyz";
  if (!isAuthorised) {
    res.status(401).send("You are not authorised to access this route");
  } else {
    next();
  }
});

app.get("/user/addData", (req, res) => {
  
  res.send("Data added successfully");
});
app.get("/user/deleteData", (req, res) => {
  res.send("Data deleted successfully");
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});

// git add .
// git commit -m "Describe your changes"
// git push
