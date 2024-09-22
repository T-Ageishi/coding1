export type Props = {
  selected: string | undefined;
  settings: Setting[];
};

type Setting = {
  label: string;
  value: string;
};
