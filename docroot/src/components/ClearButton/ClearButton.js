import React from "react";

export const ClearButton = (props) => (
  <button className="clear" onClick={props.handleClear}>
    {props.children}
  </button>
);

export default ClearButton;
