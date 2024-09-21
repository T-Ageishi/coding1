import { ComponentPropsWithoutRef } from "react";

export type Props = ComponentPropsWithoutRef<"input"> & {
  label: string;
};
