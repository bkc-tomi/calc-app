import React from 'react';

const DisplayArea = (props) => {
  return (
    <div className="display-area">
      {props.showContents}
    </div>
  );
}

export default DisplayArea;