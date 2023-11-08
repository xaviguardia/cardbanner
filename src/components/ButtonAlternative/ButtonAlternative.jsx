/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Alternative } from "../Alternative";
import "./style.css";

export const ButtonAlternative = ({ status, alternativeText = "alternative", minWidthClassName, className }) => {
  return (
    <div className={`button-alternative ${status} ${className}`}>
      <Alternative status="default" text={alternativeText} />
      <img
        className={`min-width ${minWidthClassName}`}
        alt="Min width"
        src="https://c.animaapp.com/GdNYxRf4/img/-min-width-4@2x.png"
      />
    </div>
  );
};

ButtonAlternative.propTypes = {
  status: PropTypes.oneOf(["pressed", "active"]),
  alternativeText: PropTypes.string,
};
