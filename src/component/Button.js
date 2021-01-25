import React from "react";

const Button = ({ color, onChange }) => {
  return (
    <button type="button" onClick={() => onChange(color)}>
      {color}
    </button>
  );
};

export default Button;
