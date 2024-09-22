import { ChangeEventHandler, ComponentPropsWithoutRef } from "react";

export type Props = ComponentPropsWithoutRef<"input"> & {
  label: string;
  value: string;
};

export type CheckList = {
  [value: string]: boolean;
};

export type PropsCollection = {
  propsCollection: Array<Props>;
  onChange: ChangeEventHandler<HTMLInputElement>;
  checkList: CheckList;
};
