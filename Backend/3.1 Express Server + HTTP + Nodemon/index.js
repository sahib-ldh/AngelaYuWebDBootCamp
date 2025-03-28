import express from "express";
const app = express();
const port = 3000;
const centerText = "style=\"text-align:center\"";

app.get("/", (req,res) => {
  res.send(`<h1 ${centerText} >HOME PAGE</h1><p> welcome to sahib homepage</p> `);
});
app.get("/about", (req,res) => {
  res.send(`<h1 ${centerText} >About</h1><p> My name is Sahib </p> `);
});
app.get("/contactus", (req,res) => {
  res.send(`<h1 ${centerText} >Contact us</h1><p>you can contact me on number and email</p> `);
});
app.get("/login", (req,res) => {
  res.send(`<h1 ${centerText} >Login</h1><p>page is not ready yet</p> `);
});
app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
