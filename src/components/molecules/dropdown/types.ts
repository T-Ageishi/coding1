import { FC } from "react";

export type Props = {
  value?: string | undefined;
  setValue: (value: string | undefined) => void;
  settings: Setting[];
};

export type UseDropdown = (defaultValue: string | undefined) => {
  RenderDropdown: FC<Omit<Props, "value" | "setValue">>;
  value: string | undefined;
};

type Setting = {
  key: string;
  "data-value": string;
  label: string;
};
