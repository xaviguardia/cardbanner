import { CardBanner } from ".";

export default {
  title: "Components/CardBanner",
  component: CardBanner,
  argTypes: {
    tag1: {
      options: ["on"],
      control: { type: "select" },
    },
    ambient: {
      options: ["main", "inverse"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    tag: false,
    tag1: "on",
    ambient: "main",
  },
};
