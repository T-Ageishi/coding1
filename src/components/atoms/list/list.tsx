import { FC } from "react";
import { ListItemProps, ListProps } from "./types.ts";
import styles from "./styles.module.css";

/**
 * リスト
 */
export const List: FC<ListProps> = ({ listItemPropsCollection }) => {
  return (
    <ul className={styles["list"]}>
      {listItemPropsCollection.map(({ key, ...props }) => (
        <ListItem key={key} {...props} />
      ))}
    </ul>
  );
};

export const ListItem: FC<ListItemProps> = ({ label, selected, ...props }) => {
  const className = `${styles["list-item"]} ${selected ? styles["list-item-selected"] : ""}`;
  return (
    <li className={className} {...props}>
      <span className={styles["label"]}>{label}</span>
    </li>
  );
};
