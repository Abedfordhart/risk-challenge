import React from "react";
import data from "./data.json";
import "./app.css";

console.log(data);

export default class App extends React.Component {
    render() {
        return (
            <div className="hello">hello world</div>
        )
    }
}
