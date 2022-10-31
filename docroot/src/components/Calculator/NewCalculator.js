import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import ClearButton from "../ClearButton/ClearButton";
import * as math from "mathjs";

const Calculator = () => {


  const [input, setInput] = useState("");

  const addToInput = (val) => {
    console.log(val);
    setInput(input + val);
  };

  const handleEqual = () => {
    setInput(math.evaluate(input));
  };

  const console = (e) => {
    e.preventDefault();
    console.log('clicked');
  }




    return (
      <div className="calculator">
        <Button onClick={console}>
          console
        </Button>
        <Input input={input} />
        <div className="row">
          <Button onClick={addToInput} number="7">7</Button>
          <Button onClick={addToInput} number="8">8</Button>
          <Button onClick={addToInput} number="9">9</Button>
          <Button onClick={addToInput} number="/">/</Button>
        </div>
        <div className="row">
          <Button onClick={addToInput} number="4">4</Button>
          <Button onClick={addToInput} number="5">5</Button>
          <Button onClick={addToInput} number="6">6</Button>
          <Button onClick={addToInput} number="*">x</Button>
        </div>
        <div className="row">
          <Button onClick={addToInput} number="1">1</Button>
          <Button onClick={addToInput} number="2">2</Button>
          <Button onClick={addToInput} number="3">3</Button>
          <Button onClick={addToInput} number="+">+</Button>
        </div>
        <div className="row">
          <Button onClick={addToInput} number=".">.</Button>
          <Button onClick={addToInput} number="0">0</Button>
          <Button onClick={handleEqual} number="=">=</Button>
          <Button onClick={addToInput} number="-">-</Button>
        </div>
        <div className="row">
          <ClearButton handleClear={() => setInput("")}>
            Clear
          </ClearButton>
        </div>
      </div>
    );

}

export default Calculator;
