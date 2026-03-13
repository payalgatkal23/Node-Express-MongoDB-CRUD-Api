const express = require("express");
const mongoose = require("mongoose");
const student = require("./models/user");

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

//add
app.post("/adduser", async (req, res) => {
  res.send(newUser);
  const newUser = await student.create(req.body);
});

//read
app.get("/readuser", async (req, res) => {
  res.send(read);
  const read = await student.find();
});

//delete
app.delete("/deleteuser/:name", async (req, res) => {
  res.send(del);
  const del = await student.deleteOne({ name: req.params.name });
});

//update
app.put("/updateuser", async (req, res) => {
  const up = await student.updateOne(
    { name: req.body.name },
    { $set: req.body },
  );
  res.send(up);
});

app.listen(3000, () => {
  console.log(`server is running on port ${PORT}`);
});
