import { FC } from "react";
import { IconProps } from "./types.ts";
import styles from "./styles.module.css";

/**
 * アイコン
 */
export const Icon: FC<IconProps> = ({ icon, className }) => {
  return (
    <span
      className={`material-symbols-outlined ${styles["material-symbols-outlined"]} ${className ? className : ""}`}
    >
      {icon}
    </span>
  );
};
