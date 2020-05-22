import React from 'react';

const DisplayArea = (props) => {
  return (
    <div className="display-area">
      {props.showInputValue}
    </div>
  );
}

export default DisplayArea;