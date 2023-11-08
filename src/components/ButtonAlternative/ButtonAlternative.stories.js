import { ButtonAlternative } from ".";

export default {
  title: "Components/ButtonAlternative",
  component: ButtonAlternative,
  argTypes: {
    status: {
      options: ["pressed", "active"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    status: "pressed",
    alternativeText: "alternative",
    minWidthClassName: {},
    className: {},
  },
};
