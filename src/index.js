import * as express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("GET /");
});

app.post("/", (req, res) => {
  res.status(201).send("POST /");
});

app.put("/", (req, res) => {
  res.send("PUT /");
});

app.delete("/", (req, res) => {
  res.send("DELETE /");
});

app.patch("/", (req, res) => {
  res.send("PATCH /");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
