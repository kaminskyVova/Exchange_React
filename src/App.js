import React, { Component } from "react";
import "./App.css";
import Exchange from "./components/Exchange";
import ListItem from "./components/ListItem";
import Update from "./components/Update";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ['Dollar', 'Euro', 'Shekel'],
      exchResult: [{}]
    }
  }

  render() {
    return (
      <div className="App">
        <Exchange />
        <hr />
        <ListItem />
        {/* <div>
          <p>#2</p>
          <p>From Euro To Shekel</p>
          <p>2 = 9.5</p>
          <button>x</button>
        </div> */}
        <hr />
        <Update />
        <hr />
      </div>
    );
  }
}

export default App;
