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

//Read One
app.get("/movies/get/:id", (req, res) => {
  const search = req.params.id;
  const movie = movies.find((movie) => movie.title === search);
  if (movie) {
    res.send({
      status: 200,
      data: movie,
    });
  } else {
    res.status(404).send({
      status: 404,
      error: true,
      message: `the movie ${search} does not exist`,
    });
  }
});

//Create

app.get("/movies/add", (req, res) => {
  let title = req.query.title;
  let year = parseInt(req.query.year);
  let rating = parseInt(req.query.rating);
  console.log(year);
  if (title && year) {
    if (!rating) {
      rating = 4;
    }
    if (year < 1000) {
      res.status(403).json({
        status: 403,
        error: true,
        message: "Year is  not made of 4 digits",
      });
    }
    if (year==='step') {
      res.status(403).json({
        status: 403,
        error: true,
        message: "Year is  not a number",
      });
    }
    const movie = { title, year, rating };
    movies.push(movie);
    res.json({
      status: 200,
      message: "Movie added successfully",
      data: movie,
    });
  } else {
    res.status(403).json({
      status: 403,
      error: true,
      message: "you cannot create a movie without providing a title and a year",
    });
  }
});

//DELETE

app.get('/movies/delete/:id', (req, res) => {
  const movieId = req.params.id;

  const movieIndex = movies.findIndex(movie => movie.title === movieId);

  if (movieIndex===-1) {
    return res.status(404).json({
      status: 404,
      error: true,
      message: `The movie ${movieId} does not exist`
    });
  }movies.splice(movieIndex, 1);

 res.json(movies)

  
});


app.listen(port, () => {
  console.log("ok");
});
