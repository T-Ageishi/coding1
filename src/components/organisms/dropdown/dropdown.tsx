/* eslint-disable react-hooks/exhaustive-deps */
import { FC, MouseEventHandler, useCallback, useEffect, useState } from "react";
import { Props } from "./types.ts";
import { Icon } from "../../atoms/icon/icon.tsx";
import styles from "./styles.module.css";
import { useMenu } from "../../molecules/menu/menu.tsx";

/**
 * ドロップダウン
 */
export const Dropdown: FC<Props> = ({ selected, settings }) => {
  const [isActive, setIsActive] = useState(false);

  const {
    selected: selectedInMenu,
    renderMenu,
    setIsOpen,
  } = useMenu({ selected, settings });

  //Dropdownをクリックしたときの処理
  const onDropdownClick: MouseEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      e.stopPropagation();
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

  //初期化処理
  useEffect(() => {
    document.addEventListener("click", () => onBackdropClick());
  }, [onBackdropClick]);

  return (
    <>
      <div
        className={`${styles["container"]} ${isActive ? styles["active"] : styles["inactive"]}`}
        onClick={onDropdownClick}
      >
        <div className={styles["label-wrapper"]}>
          <span className={styles["label"]}>
            {
              settings.find((setting) => setting.value === selectedInMenu)
                ?.label
            }
          </span>
        </div>
        <Icon icon={"arrow_drop_down"} className={styles["icon"]} />
      </div>
      {renderMenu()}
    </>
  );
};
