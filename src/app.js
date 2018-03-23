import React, {Component} from "react";
import data from "./data.json";
import "./app.css";
import Search from './components/search/Search';
import ItemList from './components/itemList/ItemList';

export default class App extends Component {
  state = {
    foodItems: data,
    search: '',
    selectedItems: []
  }

  handleInputChange = event => {
    const {name, value} = event.target;
    const code = event.keyCode || event.charCode;
    const selectedItems = this.state.selectedItems;

    this.setState({
      [name]: value
    })

    if(this.state.search === '' && (code === 8 || code === 46)) {
      selectedItems.pop();
      this.setState({
        selectedItems: selectedItems
      })
    }

  }

  handleClick = event => {
    const selectedItems = this.state.selectedItems;

    selectedItems.push(event.target.textContent);

    this.setState({
      selectedItems: selectedItems
    })

    console.log("I've been clicked!", event.target.textContent);

  }

  render() {
    const filteredItems = this.state.foodItems.filter((item) => {
      return item.toLowerCase().includes(this.state.search.toLowerCase());
    })
    console.log('App Items: ', this.state.foodItems);
    console.log('App Search: ', this.state.search);
    console.log('App selectedItems: ', this.state.selectedItems);
      return (
          <div className="filter-search">
          <Search
            value={this.state.search}
            handleInputChange={this.handleInputChange}
            selectedItems={this.state.selectedItems}
          />
          <ItemList
            foodItems={filteredItems}
            handleClick={this.handleClick}
          />
          </div>
      )
  }
}
