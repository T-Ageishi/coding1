import { ComponentPropsWithoutRef, ReactNode } from "react";

export type ListProps = ComponentPropsWithoutRef<"ul"> & {
  listItemPropsCollection: ListItemProps[];
};
export type ListItemProps = ComponentPropsWithoutRef<"li"> & {
  label: ReactNode;
  selected?: boolean;
};
