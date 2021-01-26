import React, { Component } from 'react';

class Header extends Component {
  state = {  }
  render() { 
    return (
      <header className = "header">
        <a href = "/"
          ><img
            src = "https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png"
            alt = "netflix-font"
            border = "0"
        /></a>
        <form 
        id = "search" 
        className = "search" 
        onSubmit = {this.props.updateList}
        >
          <input 
          onChange={this.props.inputSearchValue} 
          type="search" placeholder="Search for a title..." 
          value = {this.props.searchInput} 
          />
        </form>
      </header>
    );
  }
}
export default Header;