import React from 'react';
import "./assets/styles.css";
import {DisplayArea, ButtonArea} from "./components/index";

const App = () => {
  return (
    <div className="calc-area">
      <DisplayArea />
      <ButtonArea />
    </div>
  );
}

export default App;
