import { Meta, StoryObj } from "@storybook/react";
import { useDropdown } from "./dropdown.tsx";

const meta: Meta = {};
export default meta;

type Story = StoryObj;
export const Default: Story = {
  decorators: [
    () => {
      const props = {
        settings: [
          { label: "選択肢1", key: "1", "data-value": "1" },
          { label: "現在選択中", key: "2", "data-value": "2" },
          { label: "選択肢3", key: "3", "data-value": "3" },
          {
            label:
              "文字数が非常に長いときの表示。文字数が非常に長いときの表示。文字数が非常に長いときの表示。文字数が非常に長いときの表示。",
            key: "4",
            "data-value": "4",
          },
        ],
      };
      const { RenderDropdown } = useDropdown("2");
      return <RenderDropdown {...props} />;
    },
  ],
};
