import React, { Component } from 'react';

class Movie extends Component {

  render() { 

    if(this.props.list === undefined){
      return (<div></div>);
    };

    if(this.props.list.length !== 0){
      return ( 
        <div className = "titleList">
          <div className = "title">
            <h1>Movies</h1>
            <div className = "titles-wrapper">
              {this.props.list.map(element => {
                return (
                  <div className = "movie" key = {element.id}>
                    <img
                      src= {element.poster_path === null ? "./image-not-available.jpg" : 'https://image.tmdb.org/t/p/w500'+element.poster_path}
                      alt="Movie poster"
                    />
                    <div className = "overlay">
                      <div className = "title">{element.title}</div>
                      <div className = "rating">{element.vote_average}/10</div>
                      <div className = "plot">
                        {element.overview}
                      </div>
                      <div 
                      data-toggled = {this.props.marked.includes(element.id.toString()) ? "true" : "false" }
                      className = "listToggle" 
                      onClick = {this.props.mark} 
                      id = {element.id}
                      >
                        <div>
                          <i className = "far fa-heart"></i><i className = "fas fa-heart"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      );
    }else{
      return (
        <div className = "titleList">
          {<p>Sorry, we did not find any movie matched with your input. Please make sure your input is correct.</p>}
        </div>
      )
    }
  }
}
 
export default Movie;