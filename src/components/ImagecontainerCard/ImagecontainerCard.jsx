/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ImagecontainerCard = ({
  className,
  rectangle = "https://c.animaapp.com/GdNYxRf4/img/rectangle-2-2.svg",
}) => {
  return (
    <div className={`imagecontainer-card ${className}`}>
      <img className="rectangle" alt="Rectangle" src={rectangle} />
    </div>
  );
};

ImagecontainerCard.propTypes = {
  rectangle: PropTypes.string,
};
