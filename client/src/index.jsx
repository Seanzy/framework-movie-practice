import React from 'react';
import ReactDOM  from 'react-dom';
import Movie from './components/Movie.jsx';
import Search from './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';
import $ from 'jquery';


class MovieList extends React.Component {
  constructor() {
    super();
    
    this.state = {
      movies: [],
      filteredMovies: [],
    }
    
    this.changeDisplayedMovies = this.changeDisplayedMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }
  
  //ajax gets url, method, success and error
  //ajax posts, 6 things, including the contentType: 'application/json' and data: JSON.stringify({title: movieToAdd})
  
  //componentDidMount() is good place to init DOM nodes
  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/movies', 
      success: (movies) => {
        this.setState({
          movies: movies,
          filteredMovies: movies,
        })
      },
      error: err => {
        console.log(err);
      },
    })
  }
  
  changeDisplayedMovies(filteredMoviesFromSearch) {
    console.log(filteredMoviesFromSearch);
    this.setState({filteredMovies: filteredMoviesFromSearch})
  }
  
  addMovie(movieToAdd) {
    // console.log('Added movie', movieToAdd);
    $.ajax({
      method: 'POST',
      url: '/movie',
      data: JSON.stringify({title: movieToAdd}),
      contentType: 'application/json',
      success: movie => {
        console.log('you got this back: ', movie);
      },
      error: err => {
        console.log(err);
      }
    })
    
    //add movieToAdd to both movides and filteredMovies
    var copy1 = this.state.movies.slice(0);
    var copy2 = this.state.filteredMovies.slice(0);
    
    copy1.push({title: movieToAdd});
    copy2.push({title: movieToAdd});
    
    this.setState({
      movies: copy1,
      filteredMovies: copy2,
    })
  }
  
  //  Modify your index.jsx use the /movie POST route
  
  render() {
    return (
      <div>
        <AddMovie class="input" addMovie={this.addMovie}/>
        
        <br/><br/><br/>
        {this.state.filteredMovies.map((video, index) => {
          return <Movie video={video} key={index}/>
          
        })}
        <Search class="input" movies={this.state.movies} changeDisplayedMovies={this.changeDisplayedMovies}/>
        
        
      </div>
    )
  }//render
}

ReactDOM.render( <MovieList />, document.getElementById('app'));


// Display a list of movies from data hardcoded in your index.jsx.
//  Add a search bar so that a user may see if a movie is in the list.
//  After a user submits the search, display all matches (or partial matches) to that title.
//  Bonus: Handle the case of no movie by that name found gracefully.
//  Add an input field for users to add movies.
//  Add a button to each list item that allows the user to toggle a 'watched' property.
//  Add two buttons to allow the users to toggle between a list of 'watched' movies and movies 'to watch'.
//  Add a panel of movie information that appears when the title is clicked (consider starting with hardcoded information)


  // componentDidMount() {
  //   $.ajax({
  //     method: 'GET',
  //     url: '/movies',
  //     success: (movies) => {
  //       // console.log(movies);
  //       this.setState({
  //         movies: movies,
  //         filteredMovies: movies,
  //       })
  //     },
  //     error: function(err) {
  //       console.log(err);
  //     }
  //   })
  // }
  
  
  
    //   $.ajax({
    //   method: 'POST',
    //   url: '/movie',
    //   data: JSON.stringify({title: movieToAdd}), //can I send this as a querystring? 
    //   contentType: 'application/json',
    //   success: (res) => {
    //     console.log('Client side response: ', res);
    //   },
    //   error: err => {
    //     console.log('Client side error', err);
    //   },
      
    // })
  
  
