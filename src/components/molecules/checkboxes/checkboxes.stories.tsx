import type { Meta, StoryObj } from "@storybook/react";
import { useCheckboxes } from "./checkboxes.tsx";

const meta: Meta = {};
export default meta;

type Story = StoryObj;
export const Default: Story = {
  args: {},
  decorators: [
    () => {
      const { renderCheckboxes } = useCheckboxes([
        { label: "Sample Checkbox", value: "1" },
        { label: "北海道", value: "2" },
        { label: "青森", value: "3" },
        { label: "秋田", value: "4" },
        { label: "岩手", value: "5" },
      ]);
      return renderCheckboxes();
    },
  ],
};
