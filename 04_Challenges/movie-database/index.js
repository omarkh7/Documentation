const express = require("express");
const app = express();
const port = 3000;
//Date
const times = new Date();
let hours = times.getHours();
let minutes = times.getMinutes();
let time = hours + ":" + minutes;

//database
const movies = [
  { title: "Jaws", year: 1975, rating: 8 },
  { title: "Avatar", year: 2009, rating: 7.8 },
  { title: "Brazil", year: 1985, rating: 8 },
  { title: "الإرهاب والكباب‎", year: 1992, rating: 6.2 },
];

app.get("/", (req, res) => {
  res.send("ok");
});
//test
app.get("/test", (req, res) => {
  res.send({ status: 200, message: time });
});

//hello
app.get("/hello/:id", (req, res) => {
  const id = req.params.id;
  res.send({
    status: 200,
    message: `Hello, ${id}`,
  });
});
//search
app.get("/search", (req, res) => {
  const search = req.query.s;
  if (search) {
    res.send({
      status: 200,
      message: "ok",
      data: search,
    });
  } else {
    res.status(500).json({
      status: 500,
      error: true,
      message: "you have to provide a search",
    });
  }
});

//Movies
app.get("/movies/add", (req, res) => {
  res.send({ status: 200, message: "" });
});
app.get("/movies/get", (req, res) => {
  res.send({ status: 200, data: movies });
});
app.get("/movies/edit", (req, res) => {
  res.send({ status: 200, message: "" });
});
app.get("/movies/delete", (req, res) => {
  res.send({ status: 200, message: "" });
});
//get by-date
app.get("/movies/get/by-date", (req, res) => {
  movies.sort((a, b) => {
    return a.year - b.year;
  });
  res.send({ status: 200, data: movies });
});
//get by-rating
app.get("/movies/get/by-rating", (req, res) => {
  movies.sort((a, b) => {
    return b.rating - a.rating;
  });
  res.send({ status: 200, data: movies });
});

//get by-Title
app.get("/movies/get/by-title", (req, res) => {
  movies.sort((a, b) => {
    return a.title - b.title;
  });
  res.send({ status: 200, data: movies });
});

app.listen(port, () => {
  console.log("ok");
});
