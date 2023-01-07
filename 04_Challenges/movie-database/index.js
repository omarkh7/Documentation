const express = require("express");
const app = express();
const port = 3000;
//Date
const times = new Date();
let hours = times.getHours();
let minutes = times.getMinutes();
let time = hours + ":" + minutes;

app.get("/", (req,res) => {
  res.send("ok");
});
//test
app.get("/test", (req,res) => {
  res.send({ status: 200, message: time });
});

//hello
app.get('/hello/:id', (req, res) => {
    const id = req.params.id;
    res.send({
      status: 200,
      message: `Hello, ${id}`
    });
  }); 
//search
  app.get('/search', (req, res) => {
    const search = req.query.s;
    if (search) {
      res.send({
        status: 200,
        message: 'ok',
        data: search
      });
    } else {
      res.status(500).json({
        status: 500,
        error: true,
        message: 'you have to provide a search'
      });
    }
  });

app.listen(port, () => {
  console.log("ok");
});
