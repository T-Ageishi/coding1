import { Icon } from "./icon.tsx";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Icon> = {
  component: Icon,
};
export default meta;

type Story = StoryObj<typeof Icon>;
export const ArrowDropDown: Story = {
  args: {
    icon: "arrow_drop_down",
  },
};
