import React, { Component } from 'react';
import './App.css';
import Movie from "./component/movie";
import Header from "./component/header";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: {},
      searchInput: "",
      marked: [],
    }
  }

  inputSearchValue = (e) => {
    this.setState({searchInput:e.target.value})
    e.preventDefault();
  }

  updateList = (e) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=11a030b6643e51243e7edd59729a5b5b&language=en-US&page=1&include_adult=false&query=${this.state.searchInput}`)
    .then(response => response.json())
    .then(data => {
      this.setState({searchResults : data})}
    )
    .then(()=>{this.setState({searchInput:""})});
    e.preventDefault();
  }

  mark = (e) => {
    const targetId = e.target.closest(".listToggle").getAttribute("id");
    if(e.target.closest(".listToggle").getAttribute("data-toggled") === "false"){
      e.target.closest(".listToggle").setAttribute("data-toggled","true");
      this.setState(currentState => ({
        marked: [...currentState.marked, targetId]
      }));
    }else{
      e.target.closest(".listToggle").setAttribute("data-toggled", "false");
      this.setState(currentState => ({ 
        marked: currentState.marked.filter(element => element !== targetId)
    }))}
    e.preventDefault();
  }


  render() {
    return (
      <div className="App">
        <Header 
        inputSearchValue = {this.inputSearchValue}
        updateList = {this.updateList}
        searchInput = {this.state.searchInput}
        />

        <Movie 
        list = {this.state.searchResults.results}
        mark = {this.mark}
        marked = {this.state.marked}
        />
      </div>
    );
  }
}
 
export default App;

