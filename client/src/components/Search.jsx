import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    } 
    
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
    
  }
  
  handleChange(e) {
    this.setState({query: e.target.value})
  }
  
  search() {
   
    var query = this.state.query.toLowerCase();
    var filtered = [];
    
    //iterate over array of movie objects
    for (let i = 0; i < this.props.movies.length; i++) {
      var title = this.props.movies[i].title.toLowerCase();
  
      //check if movie title includes this.state.query
      if (title.includes(query)) {
        //empty filtered array before pushing queried movies
        filtered.push(this.props.movies[i]);
      }
      
    }  
    //if no, display nothing
    this.props.changeDisplayedMovies(filtered);
    
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.query} onChange={this.handleChange}/>
        <input type="submit" value="Go" onClick={this.search}/>
      </div>  
    )
    
    }
  
}

export default Search;

