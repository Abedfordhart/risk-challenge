import $ from "jquery";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";

function render(Component) {
    ReactDOM.render(
        <Component />,
        document.getElementById('app')
    );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept("./app", () => {
        render(require("./app").default)
    });
}
