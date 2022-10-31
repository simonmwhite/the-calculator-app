import React from "react";

const isOperator = (val) => {
  return !isNaN(val) || val === "." || val === "=";
};

export const Button = ({ children } ) => {
  return (
    <div
      className={`button ${isOperator(children) ? null : "operator"}`}

    >
      {children}
    </div>
  );
};

export default Button;
