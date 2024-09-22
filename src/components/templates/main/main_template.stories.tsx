import { Meta, StoryObj } from "@storybook/react";
import { MainTemplate } from "./main_template.tsx";

const meta: Meta<typeof MainTemplate> = {
  component: MainTemplate,
};
export default meta;

type Story = StoryObj<typeof MainTemplate>;
export const Default: Story = {
  args: {
    children: (
      <div style={{ height: "100%", backgroundColor: "antiquewhite" }}></div>
    ),
  },
};
