import React from 'react';
import {CalcButton} from "./index";

const ButtonArea = () => {
  const buttonList = ["AC", "+ / -", "%", "÷",
                      7, 8, 9, "×",
                      4, 5, 6, "-",
                      1, 2, 3, "+",
                      0, ".", "=",]
  return (
    <div className="button-area">
      {buttonList.map((buttonValue, index) => {
        let cName = "";
        if (buttonValue === "=") {
          cName = "large-button";
        }
        return (
          <CalcButton
            cName={cName}
            value = {buttonValue}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default ButtonArea;