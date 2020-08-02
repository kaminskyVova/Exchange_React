import React, { Component } from "react";

class Update extends Component {
  render() {
    return (
      <div>
        <h2>Update</h2>
        <div
          style={{
            width: 300,
            display: "flex",
            margin: "auto",
            paddingLeft: 150,
          }}
        >
          <div style={{ marginRight: 50 }}>
            <h3>Type</h3>
            <p>Dollar</p>
            <p>Euro</p>
            <p>Shekel</p>
          </div>
          <div>
            <h3>Value</h3>
            <p>4</p>
            <p>5</p>
            <p>1</p>
          </div>
        </div>

        <label>
          Type
          <input></input>
          <br />
        </label>
        <label>
          New Value
          <input></input>
          <br />
        </label>

        <button>Back</button>
        <button>Update</button>
      </div>
    );
  }
}

export default Update;
