import React, { PureComponent } from 'react';

class Search extends PureComponent {
  
  onChange = (e) => {
    console.log(e.target.value)
    
  }
  // onSearch = (e) => {
  //   e.preventDefault()
  //   console.log(e.target.term.value)
  // }
  render() {  
    return (
      // <form onSubmit={this.onSearch}>
        <input 
          type="text" 
          name='term' 
          placeholder="검색어를 입력하세요" 
          onChange={this.onChange}>
        </input>
      //   <input type="submit" value="search"></input>
      // </form>
    )
  }
}

export default Search;