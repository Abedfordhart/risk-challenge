import React, {Component} from "react";
import data from "./data.json";
import "./app.css";
import Search from './components/Search';
import ItemList from './components/ItemList';

export default class App extends Component {
  state = {
    foodItems: data,
    search: ''
  }

  handleInputChange = event => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

    render() {
      console.log('App Items: ', this.state.foodItems);
      console.log('App Search: ', this.state.search);

        return (
            <div className="hello">FOOD
            <Search
              value={this.state.search}
              handleInputChange={this.handleInputChange}
            />
            <ItemList
              foodItems={this.state.foodItems}
            />
            </div>
        )
    }
}
