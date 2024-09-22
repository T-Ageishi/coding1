import { Dispatch, FC, ReactNode } from "react";

export type Props = {
  isOpen: boolean;
  anchorEl?: HTMLElement | null;
  children: ReactNode;
};

export type UseMenu = () => {
  setIsOpen: Dispatch<boolean>;
  RenderMenu: FC<Omit<Props, "isOpen">>;
};
