import React, {useState} from 'react';
import "./assets/styles.css";

import {DisplayArea, ButtonArea} from "./components/index";


const App = () => {
  const [btns, setBtns] = useState([
    {value: 7, able: true, type: "number"},
    {value: 8, able: true, type: "number"},
    {value: 9, able: true, type: "number"},
    {value: "÷", able: false, type: "function"},
    {value: 4, able: true, type: "number"},
    {value: 5, able: true, type: "number"},
    {value: 6, able: true, type: "number"},
    {value: "×", able: false, type: "function"},
    {value: 1, able: true, type: "number"},
    {value: 2, able: true, type: "number"},
    {value: 3, able: true, type: "number"},
    {value: "-", able: false, type: "function"},
    {value: "AC", able: false, type: "clear"},
    {value: 0, able: true, type: "number"},
    {value: "=", able: false, type: "function"},
    {value: "+", able: false, type: "function"},
  ]);

  const [display, setDisplay] = useState("");
  const [calcable, setCalcable] = useState(false);
  const [stringNumber, setStringNumber] = useState("");
  const [number , setNumber] = useState(0);
  const [operator, setOperator] = useState("");
  
  const changeBtnState = (value, bool) => {
    const bs = btns;
    bs.forEach((b, i) => {
      if (b.value === value) {
        bs[i].able = bool;
      }
    });
    setBtns(bs);
  }

  const initBtnsState = (type) => {
    const bs = btns;
    for (let i=0; i<bs.length; i++) {
      if (bs[i].type === type) {
        bs[i].able = true;
      } else {
        bs[i].able = false;
      }
    }
    setBtns(bs);
  }

  const ableJustAC = () => {
    const bs = btns;
      for (let i=0; i<bs.length; i++) {
        if (bs[i].type !== "clear") {
          bs[i].able = false;
        }
      }
    setBtns(bs);
  }

  const unableFunction = () => {
    const bs = btns;
    for (let i=0; i<bs.length; i++) {
      if (bs[i].type === "function") {
        bs[i].able = false;
      }
    }
    setBtns(bs);
  }

  const ableFunction = () => {
    const bs = btns;
    for (let i=0; i<bs.length; i++) {
      if (bs[i].type !== "number") {
        bs[i].able = true;
      }
    }
    setBtns(bs);
  }

  const calc = () => {
    let ans = 0;
    switch (operator) {
      case "+":
        ans = number + parseInt(stringNumber);
        setDisplay(display + "=" + ans.toString());
        break;
      case "-":
        ans = number - parseInt(stringNumber);
        setDisplay(display + "=" + ans.toString());
        break;
      case "×":
        ans = number * parseInt(stringNumber);
        setDisplay(display + "=" + ans.toString());
        break;
      case "÷":
        ans = number / parseInt(stringNumber);
        setDisplay(display + "=" + ans.toString());
        break;
      default:
        break;
    }
  }

  const btnClick = (value, type) => {
    setDisplay(display + value.toString());
    if (value === "AC") {
      setDisplay("");
      initBtnsState("number", true);
      setCalcable(false);
      setStringNumber("");
      setNumber(0);
    }
    if (value === "=") {
      ableJustAC();
      setCalcable(false);
      calc();
    }
    if (["÷", "+", "-", "×"].includes(value)) {
      unableFunction();
      setCalcable(true);
      setNumber(parseInt(stringNumber));
      setStringNumber("");
      setOperator(value.toString());
    }
    if (type === "number") {
      if (calcable) {
        changeBtnState("=", true);
      } else {
        ableFunction();
      }
      setStringNumber(stringNumber + value.toString());
    }
  }

  return (
    <div className="calc-area">
      <DisplayArea showContents={display}/>
      <ButtonArea btns={btns} btnClick={btnClick}/>
    </div>
  );
}

export default App;
