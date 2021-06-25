import React, { Component } from "react";
// import "./index.css";

class Header extends Component {
  render() {
    return (
      <div>
        <h2>Users</h2>
        <div className="todo-header">
          <span>Search: </span>{" "}
          <input
            type="text"
            onKeyUp={this.handleKeyUp}
            placeholder="Search user here"
          />
        </div>
      </div>
    );
  }
}

export default Header;
