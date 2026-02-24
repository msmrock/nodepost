import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World2");
});

app.get("/teste", (req, res) => {
  res.send("Hello World22224");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
