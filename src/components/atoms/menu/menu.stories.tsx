import { StoryObj } from "@storybook/react";
import { useMenu } from "./menu.tsx";

const meta = {};
export default meta;

type Story = StoryObj;
export const Default: Story = {
  decorators: [
    () => {
      const { RenderMenu, setIsOpen } = useMenu();

      setTimeout(() => {
        setIsOpen(true);
      }, 1000);

      return <RenderMenu>{"サンプル"}</RenderMenu>;
    },
  ],
};
