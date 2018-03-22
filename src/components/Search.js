import React from 'react';

const Search = props => (
  <form>
    <input
      name="search"
      type="text"
      onChange={props.handleInputChange}
    />
  </form>
);

export default Search