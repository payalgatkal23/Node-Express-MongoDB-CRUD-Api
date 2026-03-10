const express = require("express");
const mongoose = require("mongoose");
const customer = require("./models/user");

const app = express();
const PORT = 3000;

mongoose
  .connect("mongodb://localhost:27017/crudapp")
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello 1");
});

app.post("/adduser", async (req, res) => {
  const newUser = await customer.create(req.body);
  res.send(newUser);
});

app.listen(3000, () => {
  console.log(`server is running on port ${PORT}`);
});
