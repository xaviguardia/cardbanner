import { Body } from ".";

export default {
  title: "Components/Body",
  component: Body,
  argTypes: {
    color: {
      options: ["inverse", "standard"],
      control: { type: "select" },
    },
    alignment: {
      options: ["center", "right", "left"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    color: "inverse",
    alignment: "center",
    className: {},
    typographyContentClassName: {},
    text: "Texto body",
  },
};
