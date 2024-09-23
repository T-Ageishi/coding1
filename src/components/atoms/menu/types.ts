import { Dispatch, FC, ReactNode } from "react";

export type MenuProps = {
  isOpen: boolean;
  anchorEl?: HTMLElement | null;
  children: ReactNode;
};

export type UseMenu = () => {
  setIsOpen: Dispatch<boolean>;
  RenderMenu: FC<Omit<MenuProps, "isOpen">>;
};
