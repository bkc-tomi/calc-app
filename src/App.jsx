import React, {useState, useEffect} from 'react';
import "./assets/styles.css";
import btnSet from "./assets/btnSet.json";
import {DisplayArea, ButtonArea} from "./components/index";


const App = () => {
  const [btns, setBtns] = useState(btnSet);
  const [display, setDisplay] = useState("");
  const [displayList, setDisplayList] = useState([]);
  const [calcable, setCalcable] = useState(false);
  const [stringNumber, setStringNumber] = useState("");
  const [number , setNumber] = useState(0);
  const [operator, setOperator] = useState("+");
  
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

  const calc = (number, stringNumber, operator) => {
    let ans = 0;
    switch (operator) {
      case "+":
        ans = number + parseInt(stringNumber);
        break;
      case "-":
        ans = number - parseInt(stringNumber);
        break;
      case "×":
        ans = number * parseInt(stringNumber);
        break;
      case "÷":
        ans = number / parseInt(stringNumber);
        break;
      default:
        break;
    }
    return ans;
  }

  const addDisplayList = () => {
    const list = displayList;
    list.push(display);
    setDisplayList(list);
  }

  const btnClick = (value, type) => {
    setDisplay(display + value.toString());
    if (value === "AC") {
      setDisplay("");
      addDisplayList();
      initBtnsState("number");
      setCalcable(false);
      setStringNumber("");
      setNumber(0);
      setOperator("+");
    }
    if (value === "=") {
      ableJustAC();
      setCalcable(false);
      const ans = calc(number, stringNumber, operator);
      setDisplay(display + "=" + ans.toString());
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

  // componentDidUpdate
  useEffect(() => {
    const scrollArea = document.getElementById("scroll-area");
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  });
  
  return (
    <div className="calc-area">
      <h1>ぷにぷに電卓</h1>
      <DisplayArea showList={displayList} showCalc={display}/>
      <ButtonArea btns={btns} btnClick={btnClick}/>
    </div>
  );
}

export default App;
