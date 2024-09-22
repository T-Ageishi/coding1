import { MouseEventHandler } from "react";

export type Props = {
  selected: string | undefined;
  isOpen: boolean;
  settings: Setting[];
  anchorEl?: HTMLElement | null;
  onClick: MouseEventHandler<HTMLLIElement>;
};

type Setting = {
  label: string;
  value: string;
  icon?: string;
};
