import React from "react";

function SimplerComponent(props) {
  return (
    <div className="happy" onClick={props.handleClick}>
      "I am just happy"
    </div>
  );
};

export default SimplerComponent;