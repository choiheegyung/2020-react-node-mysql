import React, { PureComponent } from 'react';

class Search extends PureComponent {
  onClick = (e) => {
    e.preventDefault()
    console.log(e.target.term.value)
  }  
  render() {
    return (
      <form onSubmit={this.props.onClick}>
        <input 
          type="text" 
          name='term' 
          placeholder="검색어를 입력하세요">
        </input>
        <input type="submit" value="search"></input>
      </form>
    )
  }
}

export default Search;