import React from 'react';
import {CalcButton} from "./index";

const ButtonArea = (props) => {
  return (
    <div className="button-area">
      {props.btn.map((buttonValue, index) => {
        let cName = "";
        if (buttonValue === "=") {
          cName = "large-button";
        }
        return (
          <CalcButton
            cName={cName}
            value = {buttonValue}
            key={index}
            btnClick={props.btnClick}
          />
        );
      })}
    </div>
  );
}

export default ButtonArea;