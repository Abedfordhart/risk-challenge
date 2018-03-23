import React from 'react';
import './itemList.css';

const ItemList = props => (
  <div>
    {props.foodItems.map((item, i) => (
      <p 
      className="list-item"
      key={i}
      onClick={props.handleClick}
      >{item}</p>
    ))}
  </div>
);

export default ItemList;