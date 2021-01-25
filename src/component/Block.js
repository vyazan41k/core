import React, { Component } from "react";
import "./Block.css";
import Button from "./Button";

class Block extends Component {
  state = {
    classColor: "",
  };

  changeColor = (e) => {
    // console.log(e);
    this.setState({ classColor: e });
  };
  render() {
    return (
      <>
        <div className={`block ${this.state.classColor}`}></div>
        <Button color={"violet"} onChange={this.changeColor} />
        <Button color={"pink"} onChange={this.changeColor} />
        <Button color={"orange"} onChange={this.changeColor} />
        <Button color={"palegreen"} onChange={this.changeColor} />
        <Button color={"purple"} onChange={this.changeColor} />
      </>
    );
  }
}

export default Block;
