import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieToAdd: '',
    } 
    
    this.handleChange = this.handleChange.bind(this);
  
  }
  
  //need to pass movieToAdd in as an object {title: movieToAdd} to movies and filteredMovies in MovieList component
  
  
  handleChange(e) {
    this.setState({movieToAdd: e.target.value});
    
  }
  
  render() {
    return (
      <div> 
        <input type="text" value={this.state.movieToAdd} onChange={this.handleChange}/>
        <input type="submit" value="Add" onClick={ () => {
          
          this.props.addMovie(this.state.movieToAdd)}}/>
      </div>  
    )
  }

}
    
export default AddMovie;


