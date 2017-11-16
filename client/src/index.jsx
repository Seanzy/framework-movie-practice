import React from 'react';
import ReactDOM  from 'react-dom';
import Movie from './components/Movie.jsx'

class MovieList extends React.Component {
  constructor() {
    super();
    
    this.state = {
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ]
    }
  }

  render() {
    return (
      <div>
        <Movie movie={this.state.movies[0]}/>
      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
