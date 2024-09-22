import { FC, MouseEventHandler, useCallback, useState } from "react";
import { Props } from "./types.ts";
import { Icon } from "../../atoms/icon/icon.tsx";
import styles from "./styles.module.css";

/**
 * メニュー（Render hooks）
 */
export const useMenu = (props: Omit<Props, "onClick" | "isOpen">) => {
  const [selected, setSelected] = useState<string | undefined>(props.selected);
  const [isOpen, setIsOpen] = useState(false);

  const onClickItem: MouseEventHandler<HTMLLIElement> = useCallback((e) => {
    e.stopPropagation();
    setSelected(e.currentTarget.dataset.value);
  }, []);

  const renderMenu = () => (
    <Menu
      {...props}
      isOpen={isOpen}
      selected={selected}
      onClick={onClickItem}
    />
  );

  return { selected, renderMenu, setIsOpen };
};

/**
 * メニューコンポーネント本体
 */
const Menu: FC<Props> = ({ settings, isOpen, selected, onClick }) => {
  return (
    <ul
      className={`${styles["container"]} ${isOpen ? styles["open"] : styles["close"]}`}
    >
      {settings.map((setting) => {
        const isSelected = setting.value === selected;

        return (
          <li
            key={setting.value}
            className={`${styles["item"]} ${isSelected ? styles["item-selected"] : ""}`}
            data-value={setting.value}
            onClick={onClick}
          >
            {setting.icon ? (
              <Icon icon={setting.icon} />
            ) : isSelected ? (
              <Icon icon={"check"} />
            ) : null}
            <div className={styles["label-wrapper"]}>
              <span className={styles["label"]}>{setting.label}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
