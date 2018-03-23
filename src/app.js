import React, {Component} from "react";
import data from "./data.json";
import "./app.css";
import Search from './components/search/Search';
import ItemList from './components/itemList/ItemList';

export default class App extends Component {
  //Handle state on App level
  state = {
    foodItems: data,
    search: '',
    selectedItems: []
  }
  //Handle user input to filter items and delete selected items
  handleInputChange = event => {
    const {name, value} = event.target;
    const code = event.keyCode || event.charCode;
    const selectedItems = this.state.selectedItems;

    this.setState({
      [name]: value
    });
    //Includes keyCode & charCode for both 'delete' and 'backspace' keys
    if(this.state.search === '' && (code === 8 || code === 46)) {
      selectedItems.pop();
      this.setState({
        selectedItems: selectedItems
      });
    }
  }
  //Handle clicks to add selected items to the search bar
  handleClick = event => {
    const selectedItems = this.state.selectedItems;

    selectedItems.push(event.target.textContent);

    this.setState({
      selectedItems: selectedItems
    });
  }

  render() {
    //Filter items based on user input, performed in render to avoid unnecessary state
    const filteredItems = this.state.foodItems.filter((item) => {
      return item.toLowerCase().includes(this.state.search.toLowerCase());
    })
    //Pass props to stateless children, leaving logic to app
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
