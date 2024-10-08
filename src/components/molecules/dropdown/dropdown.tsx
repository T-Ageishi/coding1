"use client";

/* eslint-disable react-hooks/exhaustive-deps */
import { FC, MouseEventHandler, useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { DropdownProps, UseDropdown } from "./types.ts";
import { Icon } from "../../atoms/icon/icon.tsx";
import styles from "./styles.module.css";
import { useMenu } from "../../atoms/menu/menu.tsx";
import { List } from "../../atoms/list/list.tsx";

/**
 * ドロップダウン（Render hooks）
 */
export const useDropdown: UseDropdown = (defaultValue: string | undefined) => {
  const [value, setValue] = useState(defaultValue);

  const RenderDropdown: FC<Omit<DropdownProps, "value" | "setValue">> = (
    props
  ) => {
    return (
      <>
        <Dropdown {...props} value={value} setValue={setValue} />
      </>
    );
  };

  return { RenderDropdown, value };
};

/**
 * ドロップダウン本体
 */
const Dropdown: FC<DropdownProps> = ({ settings, value, setValue }) => {
  const [isActive, setIsActive] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [menuContainer, setMenuContainer] = useState<HTMLElement | null>(null);

  const { RenderMenu, setIsOpen } = useMenu();

  //Dropdownをクリックしたときの処理
  const onDropdownClick: MouseEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      e.nativeEvent.stopImmediatePropagation();
      if (!anchorEl) {
        setAnchorEl(e.currentTarget);
      }
      setIsActive(true);
      setIsOpen(true);
    },
    []
  );
  //Dropdown以外をクリックしたときの処理
  const onBackdropClick = useCallback(() => {
    setIsActive(false);
    setIsOpen(false);
  }, []);
  //選択肢をクリックしたときの処理
  const onListItemClick: MouseEventHandler<HTMLLIElement> = useCallback((e) => {
    if (!(e.currentTarget instanceof HTMLLIElement)) {
      return;
    }
    const newValue = e.currentTarget.dataset.value;
    if (newValue === null) {
      return;
    }
    setValue(newValue);
  }, []);

  //初期化処理
  useEffect(() => {
    document.addEventListener("click", onBackdropClick);
    setMenuContainer(document.body);
  }, []);

  return (
    <>
      <div
        className={`${styles["container"]} ${isActive ? styles["active"] : styles["inactive"]}`}
        onClick={onDropdownClick}
      >
        <div className={styles["label-wrapper"]}>
          <span className={styles["label"]}>
            {settings.find((setting) => setting.key === value)?.label}
          </span>
        </div>
        <Icon icon={"arrow_drop_down"} className={styles["icon"]} />
      </div>

      {menuContainer
        ? createPortal(
            <RenderMenu anchorEl={anchorEl}>
              <List
                listItemPropsCollection={settings.map((setting) => ({
                  ...setting,
                  selected: setting.key === value,
                  onClick: onListItemClick,
                }))}
              />
            </RenderMenu>,
            menuContainer
          )
        : null}
    </>
  );
};
