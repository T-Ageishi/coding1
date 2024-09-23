import { FC } from "react";

export type DropdownProps = {
  value?: string | undefined;
  setValue: (value: string | undefined) => void;
  settings: Setting[];
};

export type UseDropdown = (defaultValue: string | undefined) => {
  RenderDropdown: FC<Omit<DropdownProps, "value" | "setValue">>;
  value: string | undefined;
};

export type Setting = {
  key: string;
  "data-value": string;
  label: string;
};
