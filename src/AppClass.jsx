import React, { Component } from "react";
import imageData from "./Components/DataComponent";

export class AppClass extends Component {
  render() {
    return (
      <div>
        <h1>USING CLASS COMPONENT</h1>
        <div className="grid">
          {imageData().map((el) => {
            return (
              <div id={el.id}>
                <img src={el.img} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AppClass;
