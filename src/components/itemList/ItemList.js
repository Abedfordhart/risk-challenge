import React from 'react';
import './itemList.css';

const ItemList = props => (
  <div>
    {props.foodItems.map((item, i) => (
      <div
        className="list-item"
        key={i}
        onClick={props.handleClick}
      >
        {item}
      </div>
    ))}
  </div>
);

export default ItemList;