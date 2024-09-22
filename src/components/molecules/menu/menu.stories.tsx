import { StoryObj } from "@storybook/react";
import { useMenu } from "./menu.tsx";

const meta = {};
export default meta;

type Story = StoryObj;
export const Default: Story = {
  decorators: [
    () => {
      const { renderMenu, setIsOpen } = useMenu({
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
      });

      setTimeout(() => {
        setIsOpen(true);
      }, 1000);

      return renderMenu();
    },
  ],
};
