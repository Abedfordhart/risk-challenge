import React from 'react';
import './itemList.css';

const ItemList = props => (
  //Render filtered items passed down from app
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