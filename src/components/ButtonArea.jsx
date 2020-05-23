import React from 'react';
import {CalcButton} from "./index";

const ButtonArea = (props) => {
  return (
    <div className="button-area">
      {props.btns.map((btn, index) => {
        return (
          <CalcButton
            btn={btn}
            key={index}
            btnClick={props.btnClick}
          />
        );
      })}
    </div>
  );
}

export default ButtonArea;