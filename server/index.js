const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

app.get('/movies', function(req, res) {
  res.send(movies);
})

//  In your Express Server code a POST route called /movie. This route will allow the user to create a new movie
//req is the movie we would like to add
app.post('/movie', (req, res) => {
  movies.push(req.body);
  res.send(req.body);
})

app.get('/load', (req, res) => {
  
  
  
  res.send(req.body); 
})

/*
const axios = require('axios');
const TMDB_API = require('./api_key.js');

const getMovies = (callback) => {
  axios.get('https://api.themoviedb.org/3/movie/now_playing', {
    params: {api_key: TMDB_API.KEY}
  })
  .then( apiResults => {
    callback(null, apiResults.data.results);
   
  })
  .catch( apiCallError => {
    callback(apiCallError, null);
  });
}

const parseMovies = (movieData) => {
  return movieData.map( movieObj => {
    return [movieObj.id, 
            movieObj.title,
            movieObj.overview,
            movieObj.release_date,
            movieObj.vote_average,
            movieObj.vote_count,
            0
          ]
  });
}

module.exports = {
  getMovies:    getMovies,
  parseMovies:  parseMovies
}
*/





















