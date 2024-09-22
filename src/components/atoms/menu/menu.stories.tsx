import { StoryObj } from "@storybook/react";
import { useMenu } from "./menu.tsx";
import { createPortal } from "react-dom";

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

      return createPortal(<RenderMenu>{"サンプル"}</RenderMenu>, document.body);
    },
  ],
};
