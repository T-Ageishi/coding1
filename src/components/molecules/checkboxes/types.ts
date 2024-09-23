import { ChangeEventHandler, ComponentPropsWithoutRef } from "react";

export type CheckboxProps = ComponentPropsWithoutRef<"input"> & {
  label: string;
  value: string;
};

export type CheckList = {
  [value: string]: boolean;
};

export type PropsCollection = {
  propsCollection: Array<CheckboxProps>;
  onChange: ChangeEventHandler<HTMLInputElement>;
  checkList: CheckList;
};
