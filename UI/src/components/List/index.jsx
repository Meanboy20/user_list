import React, { Component } from "react";
import store from "../../redux/store.js";

// import "./index.css";

class List extends Component {
  state = {
    userData: [
      {
        id: 1,
        firstName: "Jack",
        lastName: "Lee",
        sex: "male",
        age: 30,
        passWord: "Ufefeangoey897e",
      },
      {
        id: 2,
        firstName: "Jerry",
        lastName: "Ma",
        sex: "male",
        age: 35,
        passWord: "wlofsiyvngoey897e",
      },
    ],
  };
  render() {
    return (
      <div>
        <div>
          <table style={{ width: "100" }}>
            <tbody>
              <tr>
                <th>Edit</th>
                <th>Delete</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Sex</th>
                <th>Age</th>
              </tr>
              {this.state.userData.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>
                      <button>Edit</button>
                    </td>
                    <td>
                      <button>Delete</button>
                    </td>

                    <td>{user.firstName}hello</td>
                    <td>{user.lastName}</td>
                    <td>{user.sex}</td>
                    <td>{user.age}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <br />
        <button>Prev page</button>
        <button>Next Page</button>
      </div>
    );
  }
}

export default List;
