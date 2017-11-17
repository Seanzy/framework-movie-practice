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

