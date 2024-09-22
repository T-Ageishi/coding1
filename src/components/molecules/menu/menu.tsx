import {
  FC,
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Props } from "./types.ts";
import styles from "./styles.module.css";

/**
 * メニュー（Render hooks）
 * 呼び出しもとでappend先を指定する
 */
export const useMenu = (props: Omit<Props, "onClick" | "isOpen">) => {
  const [selected, setSelected] = useState<string | undefined>(props.selected);
  const [isOpen, setIsOpen] = useState(false);

  const onClickItem: MouseEventHandler<HTMLLIElement> = useCallback((e) => {
    setSelected(e.currentTarget.dataset.value);
    setIsOpen(false);
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
const Menu: FC<Props> = ({
  settings,
  isOpen,
  selected,
  anchorEl = document.body,
  onClick,
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
      <ul>
        {settings.map((setting) => {
          const isSelected = setting.value === selected;
          return (
            <li
              key={setting.value}
              className={`${styles["item"]} ${isSelected ? styles["item-selected"] : ""}`}
              data-value={setting.value}
              onClick={onClick}
            >
              <div className={styles["label-wrapper"]}>
                <span className={styles["label"]}>{setting.label}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
