import { MouseEventHandler } from "react";

export type Props = {
  selected: string | undefined;
  isOpen: boolean;
  settings: Setting[];
  onClick: MouseEventHandler<HTMLLIElement>;
};

type Setting = {
  label: string;
  value: string;
  icon?: string;
};
