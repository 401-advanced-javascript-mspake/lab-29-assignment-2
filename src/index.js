import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";

import Header from "./class-components/header";
import Home from "./class-components/home";
import App from "./class-components/app";

class Main extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/code" component={App} />
        </div>
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
