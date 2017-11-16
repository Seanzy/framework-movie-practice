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

// Level 2 - Express Server

//  In your Express Server code a GET route called /movies which will be used to get the hardcoded list of movies
app.get('/movies', function(req, res) {
  res.send(movies);
})

//  Move the hardcoded data from index.jsx to your Express Server js file



//  Modify your index.jsx to call this /movies GET route to do an initial load of your data


//  In your Express Server code a POST route called /movie. This route will allow the user to create a new movie


//  Modify your index.jsx use the /movie POST route