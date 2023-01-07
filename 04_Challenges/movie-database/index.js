const express = require("express");
const app = express();
const port = 3000;
const times = new Date();
let hours = times.getHours();
let minutes = times.getMinutes();
let time = hours + ":" + minutes;
app.get("/", ( res) => {
  res.send("ok");
});
app.get("/test", (res) => {
  res.send({ status: 200, message: time });
});

app.listen(port, () => {
  console.log("ok");
});
