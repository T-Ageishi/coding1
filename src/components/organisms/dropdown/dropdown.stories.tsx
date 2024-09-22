import { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./dropdown.tsx";

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
};
export default meta;

type Story = StoryObj<typeof Dropdown>;
export const Default: Story = {
  args: {
    selected: "2",
    settings: [
      { label: "選択肢1", value: "1" },
      { label: "現在選択中", value: "2" },
      { label: "選択肢3", value: "3" },
      {
        label:
          "文字数が非常に長いときの表示。文字数が非常に長いときの表示。文字数が非常に長いときの表示。文字数が非常に長いときの表示。",
        value: "4",
      },
    ],
  },
};
