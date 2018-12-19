import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { countries: [] };
  }

  componentDidMount() {
    fetch("http://localhost:4500/countries")
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({
          countries: response
        });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello Tarboot Tech</h1>
        {this.state.countries.length > 0 &&
          this.state.countries.map((c, index) => {
            return <h2 key={index}> {c.name} </h2>;
          })}
        {this.state.countries.length == 0 && <h1>loading...</h1>}
      </div>
    );
  }
}

export default App;
