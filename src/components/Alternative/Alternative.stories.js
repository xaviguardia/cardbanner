import { Alternative } from ".";

export default {
  title: "Components/Alternative",
  component: Alternative,
  argTypes: {
    status: {
      options: ["pressed", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    status: "pressed",
    text: "alternative",
  },
};
