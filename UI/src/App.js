import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="userList-wrap">
          <Header />
          <List />
          <Footer />
        </div>
      </div>
    );
  }
}
