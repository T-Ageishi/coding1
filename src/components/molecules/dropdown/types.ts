export type Props = {
  value?: string | undefined;
  defaultValue?: string | undefined;
  settings: Setting[];
};

type Setting = {
  label: string;
  key: string;
  "data-value": string;
};
