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
      // movies: [
      //   {title: 'Mean Girls'},
      //   {title: 'Hackers'},
      //   {title: 'The Grey'},
      //   {title: 'Sunshine'},
      //   {title: 'Ex Machina'},
      // ],
      
      // filteredMovies: [
      //   {title: 'Mean Girls'},
      //   {title: 'Hackers'},
      //   {title: 'The Grey'},
      //   {title: 'Sunshine'},
      //   {title: 'Ex Machina'},
      // ],
      
    }
    
    this.changeDisplayedMovies = this.changeDisplayedMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }
  
  //ajax gets url, method, success and error
  //ajax posts, 6 things, including the data
  
  //componentDidMount() is good place to init DOM nodes
  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/movies',
      success: function(movies) {
        console.log(movies);
        this.setState({
          movies: movies,
          filteredMovies: movies,
        })
      },
      error: function(err) {
        console.log(err);
      }
    })
  }
  
  changeDisplayedMovies(filteredMoviesFromSearch) {
    console.log(filteredMoviesFromSearch);
    this.setState({filteredMovies: filteredMoviesFromSearch})
  }
  
  addMovie(movieToAdd) {
    console.log('Added movie', movieToAdd);
    
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


