var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'movies',
})

connection.connect(function(err) {
  if (err) {
    console.error(err);
  }
  
  console.log('connected to db!', connection.threadId);
});

const selectAllMovies = (callback) => {
  SELECT * FROM 
}


connection.end()

module.exports = connection;

// Write code in database/index.js to insert and retrieve data from your database



//create database
//use database
//create table 


const mysql = require('mysql');
const movieAPI = require('../lib/movieAPI.js');


const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'movielist'
});

const selectAll = (callback) => {
  const sql = 'SELECT * FROM movies';

  connection.query(sql, (err, moviesFromDB) => {
    if(err) {
      callback(err, null);
    } else {
      callback(null, moviesFromDB);
    }
  });
};

const insertOne = (dataToBeInserted, callback) => {
  const sql = 'INSERT INTO MOVIES (title, description, release_date, vote_average, vote_count, watched) values (?, ?, ?, ?, ?, ?)';
 
  connection.query(sql, [...dataToBeInserted], (err) => {
      if(err) {
        callback(err);
      } else {
        callback(null);
      }
  });
};

const insertMany = (movieData, callback) => {
  const sql = 'INSERT INTO MOVIES (id, title, description, release_date, vote_average, vote_count, watched) VALUES ?';
  const parsedMovieData = movieAPI.parseMovies(movieData);
  
  connection.query(sql, [parsedMovieData], (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
  });
}

module.exports = {
  selectAll:  selectAll,
  insertOne:  insertOne,
  insertMany: insertMany
}
