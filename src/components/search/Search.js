import React from 'react';
import './search.css';

const Search = props => (
  //Add selected items to search bar when they exist, input field collapses as selected items are added 
  //onKeyUp used instead of onChange in order to capture delete/backspace key
  <form className="search">
    {props.selectedItems.map((item,i) => (
      <div className="selected" key={i}>{item}</div>
    ))}
    <input
      name="search"
      type="text"
      onKeyUp={props.handleInputChange}
    />
  </form>
);

export default Search