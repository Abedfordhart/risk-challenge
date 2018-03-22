import React from 'react';

const ItemList = props => (
  <div>
    {props.foodItems.map((item, i) => (
      <p 
      key={i}
      > {item} </p>
    ))}
  </div>
);

export default ItemList;