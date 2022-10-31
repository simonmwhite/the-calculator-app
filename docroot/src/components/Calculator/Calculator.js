import React, { Component } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import ClearButton from "../ClearButton/ClearButton";
import * as math from "mathjs";

class Calculator extends Component {
  state = {
    input: "",
  };

  addToInput = (val) => {
    this.setState({ input: this.state.input + val });
  };

  handleEqual = () => {
    this.setState({ input: math.evaluate(this.state.input) });
  };

  render() {
    return (
      <div className="calculator">
        <Input input={'this.state.input'} />
        <div className="row">
          <Button handleClick={this.addToInput} number="7">7</Button>
          <Button handleClick={this.addToInput} number="8">8</Button>
          <Button handleClick={this.addToInput} number="9">9</Button>
          <Button handleClick={this.addToInput} number="/">/</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput} number="4">4</Button>
          <Button handleClick={this.addToInput} number="5">5</Button>
          <Button handleClick={this.addToInput} number="6">6</Button>
          <Button handleClick={this.addToInput} number="*">x</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput} number="1">1</Button>
          <Button handleClick={this.addToInput} number="2">2</Button>
          <Button handleClick={this.addToInput} number="3">3</Button>
          <Button handleClick={this.addToInput} number="+">+</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput} number="0">0</Button>
          <Button handleClick={this.addToInput} number=".">.</Button>
          <Button handleClick={() => this.handleEqual()} number="=">=</Button>
          <Button handleClick={this.addToInput} number="-">-</Button>
        </div>
        <div className="row">
          <ClearButton handleClear={() => this.setState({ input: "" })}>
            Clear
          </ClearButton>
        </div>
      </div>
    );
  }
}

export default Calculator;
