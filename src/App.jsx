import React, {useState, useEffect, useCallback} from 'react';
import "./assets/styles.css";

import {DisplayArea, ButtonArea} from "./components/index";

const App = () => {
  const [btn, setBtn] = useState(["AC", "+ / -", "%", "÷",
                                  7, 8, 9, "×",
                                  4, 5, 6, "-",
                                  1, 2, 3, "+",
                                  0, ".", "=",]);

  const [showInputValue, setShowInputValue] = useState("");

  const btnClick = (value) => {
    setShowInputValue(showInputValue + value.toString());
  }
  return (
    <div className="calc-area">
      <DisplayArea showInputValue={showInputValue}/>
      <ButtonArea btn={btn} btnClick={btnClick}/>
    </div>
  );
}

export default App;
