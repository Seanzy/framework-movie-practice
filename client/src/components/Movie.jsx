import React from 'react';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div>{this.props.video.title}</div>  
    )
    
    }
  
}

export default Movie;

