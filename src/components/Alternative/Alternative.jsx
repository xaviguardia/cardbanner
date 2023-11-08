/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Alternative = ({ status, text = "alternative" }) => {
  return (
    <div className={`alternative ${status}`}>
      <div className="typography-button">{text}</div>
    </div>
  );
};

Alternative.propTypes = {
  status: PropTypes.oneOf(["pressed", "default"]),
  text: PropTypes.string,
};
