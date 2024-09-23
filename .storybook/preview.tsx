import type { Preview } from "@storybook/react";
import "../src/app/global.css";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "rgb(255 255 255)" },
        { name: "dark", value: "rgb(14 14 19)" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
