import React from 'react';
import './search.css';

const Search = props => (
  <form className="search">
    {props.selectedItems.length > 0 ? <span className="selected">{props.selectedItems}</span> : null}
    <input
      name="search"
      type="text"
      onKeyUp={props.handleInputChange}
    />
  </form>
);

export default Search