/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Body } from "../Body";
import { ButtonAlternative } from "../ButtonAlternative";
import { Heading } from "../Heading";
import { ImagecontainerCard } from "../ImagecontainerCard";
import "./style.css";

export const CardBanner = ({ tag = false, tag1, ambient }) => {
  return (
    <div className="card-banner">
      <div className={`overlap ambient-${ambient}`}>
        <div className="img-overlay">
          <div className="overlap-group">
            <ImagecontainerCard
              className={`${ambient === "main" ? "class" : "class-2"}`}
              rectangle={
                ambient === "main"
                  ? "https://c.animaapp.com/GdNYxRf4/img/rectangle-2-1.svg"
                  : "https://c.animaapp.com/GdNYxRf4/img/rectangle-2-3.svg"
              }
            />
            <div className="overlay" />
          </div>
        </div>
        {ambient === "main" && (
          <div className="frame">
            <div className="text">
              <Body
                alignment="left"
                className="title"
                color="inverse"
                text="LOREM IPSUM"
                typographyContentClassName="body-instance"
              />
              <Heading
                alignment="left"
                className="heading-3"
                color="inverse"
                text="Lorem ipsum dolor sit amet, consecte tur adipiscing elit lorem ipsum"
                typographyContentClassName="heading-instance"
              />
            </div>
            <ButtonAlternative
              alternativeText="Saber más"
              minWidthClassName="button-alternative-instance"
              status="active"
            />
          </div>
        )}

        {ambient === "inverse" && (
          <>
            <ButtonAlternative
              alternativeText="Saber más"
              className="instance-node"
              minWidthClassName="button-alternative-2"
              status="active"
            />
            <div className="div">
              <Body
                alignment="left"
                className="instance-node-2"
                color="inverse"
                text="LOREM IPSUM"
                typographyContentClassName="instance-node-3"
              />
              <Heading
                alignment="left"
                className="instance-node-2"
                color="inverse"
                text={
                  <>
                    Lorem ipsum dolor sit amet, consecte tur adipiscing elit
                    <br />
                    lorem ipsum
                  </>
                }
                typographyContentClassName="instance-node-3"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

CardBanner.propTypes = {
  tag: PropTypes.bool,
  tag1: PropTypes.oneOf(["on"]),
  ambient: PropTypes.oneOf(["main", "inverse"]),
};
