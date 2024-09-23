"use client";

import { FC, useEffect, useRef, useState } from "react";
import { MenuProps, UseMenu } from "./types.ts";
import styles from "./styles.module.css";

/**
 * メニュー（Render hooks）
 * 呼び出しもとでappend先を指定する
 */
export const useMenu: UseMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const RenderMenu: FC<Omit<MenuProps, "isOpen">> = ({
    children,
    ...props
  }) => (
    <Menu {...props} isOpen={isOpen}>
      {children}
    </Menu>
  );

  return { RenderMenu, setIsOpen };
};

/**
 * メニューコンポーネント本体
 */
const Menu: FC<MenuProps> = ({
  isOpen,
  anchorEl = document.body,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  //表示位置・サイズを調整
  useEffect(() => {
    if (!anchorEl || !ref.current) {
      return;
    }
    const offsetY = 5;
    const { bottom, left, width } = anchorEl.getBoundingClientRect();
    const { scrollY, scrollX } = window;
    ref.current.style.top = `${bottom + scrollY + offsetY}px`;
    ref.current.style.left = `${left + scrollX}px`;
    ref.current.style.width = `${width}px`;
  }, [anchorEl]);

  return (
    <div
      ref={ref}
      className={`${styles["container"]} ${isOpen ? styles["open"] : styles["close"]}`}
    >
      {children}
    </div>
  );
};
